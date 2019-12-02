<?php
include_once("Entidades/Token.php");
include_once("Entidades/Venta.php");

class VentaAPI extends Venta
{
    public function ListaVentas($request, $response, $args)
    {
        $respuesta = Venta::ListarVentas();
        $newResponse = $response->withJson($respuesta, 200);
        return $newResponse;
    }

    public function AltaVenta($request, $response, $args)
    {
        $parametros = $request->getParsedBody();
        $idProducto = $parametros["idProducto"];
        $fechaDeVenta = $parametros["fechaDeVenta"];
        $cantidad = $parametros["cantidad"];

        $respuesta = Venta::AltaVentas($idProducto, $fechaDeVenta, $cantidad);
        $newResponse = $response->withJson($respuesta, 200);
        return $newResponse;
    }
}