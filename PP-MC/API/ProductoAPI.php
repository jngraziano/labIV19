<?php
include_once("Entidades/Token.php");
include_once("Entidades/Producto.php");

class ProductoAPI extends Producto
{
    public function ListaProductos($request, $response, $args)
    {
        $respuesta = Producto::ListarProductos();
        $newResponse = $response->withJson($respuesta, 200);
        return $newResponse;
    }
    
    public function BajaProducto($request, $response, $args)
    {
        $id = $args["id"];
        $respuesta = Producto::BajaProductos($id);
        $newResponse = $response->withJson($respuesta, 200);
        return $newResponse;
    }


    public function AltaProducto($request, $response, $args)
    {
        $parametros = $request->getParsedBody();
        $descripcion = $parametros["descripcion"];
        $tipo = $parametros["tipo"];
        $fechaDeVencimiento = $parametros["fechaDeVencimiento"];
        $precio = $parametros["precio"];
        $rutaDeFoto = $parametros["rutaDeFoto"];

        $respuesta = Producto::AltaProductos($descripcion, $tipo, $fechaDeVencimiento, $precio, $rutaDeFoto);
        $newResponse = $response->withJson($respuesta, 200);
        return $newResponse;
    }

    
    public function ModificarProducto($request, $response, $args)
    {
        $parametros = $request->getParsedBody();
        $id = $parametros["id"];
        $descripcion = $parametros["descripcion"];
        $tipo = $parametros["tipo"];
        $fechaDeVencimiento = $parametros["fechaDeVencimiento"];
        $precio = $parametros["precio"];
        $rutaDeFoto = $parametros["rutaDeFoto"];

        $respuesta = Producto::ModificarProductos($id, $descripcion, $tipo, $fechaDeVencimiento, $precio, $rutaDeFoto);
        $newResponse = $response->withJson($respuesta, 200);
        return $newResponse;
    }

}


?>