<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require './vendor/autoload.php';

include_once './API/EmpleadoAPI.php';
include_once './API/MesaAPI.php';
include_once './API/PedidoAPI.php';
include_once './API/FacturaAPI.php';
include_once './API/EncuestaAPI.php';
include_once './API/ProductoAPI.php';
include_once './API/VentaAPI.php';

include_once './MDW/MDWEmpleado.php';
include_once './MDW/MDWparaOperaciones.php';
include_once './MDW/MWparaCORS.php';

$app = new \Slim\App([
    'settings' => [
        'displayErrorDetails' => true
    ]
]);

$app->post('/empleado/login[/]', \EmpleadoAPI::class . ':LoginEmpleado');

//Producto
$app->group('/producto', function () {

    $this->get('/listar[/]', \ProductoAPI::class . ':ListaProductos');

    $this->options('/{id}[/]', \ProductoAPI::class . ':BajaProducto');
    $this->delete('/{id}[/]', \ProductoAPI::class . ':BajaProducto');

    $this->post('/alta[/]', \ProductoAPI::class . ':AltaProducto');
    $this->post('/modificar[/]', \ProductoAPI::class . ':ModificarProducto');

})->add(\MWparaCORS::class . ':HabilitarCORS4200');

//Venta
$app->group('/ventas', function () {

    $this->get('/listar[/]', \VentaAPI::class . ':ListaVentas');
    
    $this->options('/{alta}[/]', \VentaAPI::class . ':AltaVenta');
    $this->post('/alta[/]', \VentaAPI::class . ':AltaVenta');

})->add(\MWparaCORS::class . ':HabilitarCORS4200');


//Empleado
$app->group('/empleado', function () {

    $this->post('/registrar[/]', \EmpleadoAPI::class . ':AltaEmpleado')
        ->add(\MDWparaOperaciones::class . ':SumarOperacion');

    $this->get('/listar[/]', \EmpleadoAPI::class . ':ListaEmpleados');

    $this->delete('/suspender/{id}[/]', \EmpleadoAPI::class . ':SuspenderEmpleado')
        ->add(\MDWparaOperaciones::class . ':SumarOperacion');

    $this->delete('/{id}[/]', \EmpleadoAPI::class . ':BajaEmpleado')
        ->add(\MDWparaOperaciones::class . ':SumarOperacion');

    $this->post('/modificar[/]', \EmpleadoAPI::class . ':ModificarEmpleado')
        ->add(\MDWparaOperaciones::class . ':SumarOperacion');

    $this->get('/operacionesSector[/]', \EmpleadoAPI::class . ':CantOperacionesSector');

    $this->post('/operacionesSectorEmpleado[/]', \EmpleadoAPI::class . ':CantOperacionesSectorEmpleado');

    $this->get('/operacionesEmpleado/{id}[/]', \EmpleadoAPI::class . ':CantOperacionesEmpleado');       

    $this->post('/fechasLogin[/]', \EmpleadoAPI::class . ':ListaEmpleadosFechasLogin');

    $this->post('/fechasRegistro[/]', \EmpleadoAPI::class . ':ListaEmpleadosFechasRegistro');

})->add(\MDWEmpleado::class . ':ValidarSocio')->add(\MDWEmpleado::class . ':ValidarToken')->add(\MWparaCORS::class . ':HabilitarCORS4200');

//Mesas
$app->group('/mesas', function () {

    $this->post('/registrar[/]', \MesaAPI::class . ':RegistrarMesa')
        ->add(\MDWparaOperaciones::class . ':SumarOperacion');

    $this->get('/listar[/]', \MesaAPI::class . ':ListarMesas');

    $this->delete('/{codigo}[/]', \MesaAPI::class . ':BajaMesa')
        ->add(\MDWparaOperaciones::class . ':SumarOperacion');

    $this->post('/foto[/]', \MesaAPI::class . ':ActualizarFotoMesa')
        ->add(\MDWparaOperaciones::class . ':SumarOperacion');

    $this->get('/cerrar/{codigo}[/]', \MesaAPI::class . ':Cerrada')
        ->add(\MDWparaOperaciones::class . ':SumarOperacion');

    $this->get('/masUsada[/]', \MesaAPI::class . ':MesaMasUsada');

    $this->get('/menosUsada[/]', \MesaAPI::class . ':MesaMenosUsada');

    $this->get('/masFacturacion[/]', \MesaAPI::class . ':MesaMasFacturacion');

    $this->get('/menosFacturacion[/]', \MesaAPI::class . ':MesaMenosFacturacion');

    $this->get('/mayorImporte[/]', \MesaAPI::class . ':MesaMayorImporte');

    $this->get('/menorImporte[/]', \MesaAPI::class . ':MesaMenorImporte');

    $this->post('/facturacionEntreFechas[/]', \MesaAPI::class . ':MesaFacturacionEntreFechas');

    $this->get('/mejorPuntuacion[/]', \MesaAPI::class . ':MesaMejorPuntuacion');

    $this->get('/peorPuntuacion[/]', \MesaAPI::class . ':MesaPeorPuntuacion');

})->add(\MDWEmpleado::class . ':ValidarSocio')->add(\MDWEmpleado::class . ':ValidarToken')->add(\MWparaCORS::class . ':HabilitarCORS4200');

//Pedido
$app->group('/pedido', function () {

    $this->post('/registrar[/]', \PedidoAPI::class . ':RegistrarPedido')
        ->add(\MDWparaOperaciones::class . ':SumarOperacion')
        ->add(\MDWEmpleado::class . ':ValidarMozo');

    $this->delete('/{codigo}[/]', \PedidoAPI::class . ':CancelarPedido')
        ->add(\MDWparaOperaciones::class . ':SumarOperacion')
        ->add(\MDWEmpleado::class . ':ValidarMozo');

    $this->get('/listarTodos[/]', \PedidoAPI::class . ':ListarTodosPedidos')
        ->add(\MDWEmpleado::class . ':FiltrarPedidos');

    $this->post('/tomarPedido[/]', \PedidoAPI::class . ':TomarPedidoPendiente')
        ->add(\MDWparaOperaciones::class . ':SumarOperacion');

    $this->post('/pedidoListo[/]', \PedidoAPI::class . ':InformarPedidoListo')
        ->add(\MDWparaOperaciones::class . ':SumarOperacion')
        ->add(\MDWEmpleado::class . ':ValidarMozo');

    $this->post('/servirPedido[/]', \PedidoAPI::class . ':ServirPedido')
        ->add(\MDWparaOperaciones::class . ':SumarOperacion')
        ->add(\MDWEmpleado::class . ':ValidarMozo');

    $this->post('/cobrarPedido[/]', \PedidoAPI::class . ':CobrarPedidosMesa')
        ->add(\MDWparaOperaciones::class . ':SumarOperacion')
        ->add(\MDWEmpleado::class . ':ValidarMozo');

    $this->get('/tiempoRestante/{codigoPedido}[/]', \PedidoAPI::class . ':TiempoRestantePedido');

    $this->get('/masVendido[/]', \PedidoAPI::class . ':LoMasVendido');

    $this->get('/menosVendido[/]', \PedidoAPI::class . ':LoMenosVendido')
        ->add(\MDWEmpleado::class . ':ValidarSocio')
        ->add(\MDWEmpleado::class . ':ValidarToken');

    $this->get('/listarFueradeTiempo[/]', \PedidoAPI::class . ':ListarPedidosFueradeTiempo')
        ->add(\MDWEmpleado::class . ':ValidarSocio');

    $this->get('/listarCancelados[/]', \PedidoAPI::class . ':ListarPedidosCancelados')
        ->add(\MDWEmpleado::class . ':ValidarSocio');


})->add(\MWparaCORS::class . ':HabilitarCORS4200');

//Facturacion
$app->group('/facturas', function () {

    $this->get('/listarPDF[/]', \FacturaAPI::class . ':ListarVentasPDF');
    $this->get('/listarExcel[/]', \FacturaAPI::class . ':ListarVentasExcel');
    $this->post('/listarEntreFechas[/]', \FacturaAPI::class . ':ListarFacturasEntreFechas');
})->add(\MDWEmpleado::class . ':ValidarSocio')->add(\MDWEmpleado::class . ':ValidarToken');

//Encuesta
$app->group('/encuesta', function () {

    $this->post('/registrar[/]', \EncuestaAPI::class . ':RegistrarEncuesta');

    $this->get('/listar[/]', \EncuestaAPI::class . ':ListarEncuestas')
        ->add(\MDWEmpleado::class . ':ValidarSocio')
        ->add(\MDWEmpleado::class . ':ValidarToken');

    $this->post('/listarEntreFechas[/]', \EncuestaAPI::class . ':ListarEncuestasEntreFechas')
        ->add(\MDWEmpleado::class . ':ValidarSocio')
        ->add(\MDWEmpleado::class . ':ValidarToken');
});

$app->run();

?>