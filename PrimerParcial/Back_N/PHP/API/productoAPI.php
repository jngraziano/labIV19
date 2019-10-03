<?php

include_once $_SERVER['DOCUMENT_ROOT']."/Back_N/PHP/Entidades/producto.php";
include_once $_SERVER['DOCUMENT_ROOT']."/Back_N/PHP/Interfaces/IApiUsable.php";
include_once $_SERVER['DOCUMENT_ROOT']."/Back_N/PHP/EntidadesPDO/productoPDO.php";

class productoAPI extends producto implements IApiUsable{

    /**
    * @api {get} /productos TraerTodos
    * @apiVersion 0.1.0
    * @apiName TraerTodos
    * @apiGroup productoAPI
    * @apiDescription Trae informacion de todos los productos
    * @apiParam {String} [CSV] Opcional, se coloca este parametro si se quiere guardar el resultado de la busqueda en un archivo CSV. El valor que se pasa en este parametro sera el nombre del archivo guardado en API/PHP/Busquedas
    * @apiParam {String} [PDF] Opcional, se coloca este parametro si se quiere guardar el resultado de la busqueda en un archivo PDF. El valor que se pasa en este parametro sera el nombre del archivo guardado en API/PHP/Busquedas
    *
    * @apiExample Como usarlo:
    *   ->get('[/]', \productoAPI::class . ':TraerTodos')
    * @apiSuccess {Object[]} productos Trae un array de productos con todos los datos de los mismos
    */
    public function TraerTodos($request, $response, $args)
    {
        $productos = productoPDO::traerproductos();
        $response = $response->withJson($productos, 200, JSON_UNESCAPED_UNICODE);  
        return $response;
    }

    /**
    * @api {get} /productos TraerUno
    * @apiVersion 0.1.0
    * @apiName TraerUno
    * @apiGroup productoAPI
    * @apiDescription Trae informacion de un producto, buscado por id
    *
    * @apiParam {Number} id Id del producto a buscar
    *
    * @apiExample Como usarlo:
    *   ->get('/{id}', \productoAPI::class . ':traerUno')
    * @apiSuccess {Object[]} producto Informacion del producto encontrado
    */
    public function TraerUno($request, $response, $args)
    {
        $descripcion = $args['descripcion'];
        $producto = productoPDO::traerproductoPorId($descripcion);
        $response = $response->withJson($producto, 200);  
        return $response;
    }

    /**
    * @api {post} /productos CargarUno
    * @apiVersion 0.1.0
    * @apiName CargarUno
    * @apiGroup productoAPI
    * @apiDescription (Admin) Da de alta un nuevo producto
    *
    * @apiParam {String} email  Email del producto
    * @apiParam {String} password Password del producto
    * @apiParam {String="dia","tarde","noche"} turno Turno del producto
    * @apiParam {String="femenino","masculino"} sexo Sexo del producto
    * @apiParam {String="user","admin"} perfil Perfil del producto
    *
    * @apiExample Como usarlo:
    *   ->post('[/]', \vehiculoAPI::class . ':CargarUno')
    * @apiSuccessExample {json} Alta exitosa:
    *     HTTP/1.1 200 OK
    *     {
    *       "Estado" => "Ok",
    *       "Mensaje" => "producto dado de alta con exito"
    *     }
    * @apiErrorExample Datos incorrectos o faltantes:
    *     {
    *       "Estado" => "Error",
    *       "Mensaje" => "Hay parametros faltantes"
    *     }
    */
    public function CargarUno($request, $response, $args)
    { 
        $ArrayDeParametros = $request->getParsedBody();

        $producto = new producto();
        $producto->descripcion = $ArrayDeParametros['descripcion'];
        $producto->tipo = $ArrayDeParametros['tipo'];
        $producto->precio = $ArrayDeParametros['precio'];
        $producto->fechavencimiento = $ArrayDeParametros['fechavencimiento'];
        $producto->RutaDeFoto = NULL;

        if(productoPDO::altaproducto($producto) != 1){
            $newBody = [
                "Estado" => "Error",
                "Mensaje" => "No se pudo dar de alta el producto"
            ];

            $response->getBody()->write(json_encode($newBody));
        }
        else{
            $newBody = [
                "Estado" => "Ok",
                "Mensaje" => "producto dado de alta con exito"
            ];

            $response->getBody()->write(json_encode($newBody));
        }

        return $response;
    }

    /**
    * @api {delete} /productos BorrarUno
    * @apiVersion 0.1.0
    * @apiName BorrarUno
    * @apiGroup productoAPI
    * @apiDescription (Admin) Da de baja un producto
    *
    * @apiParam {Number} id  Id del producto a dar de baja
    *
    * @apiExample Como usarlo:
    *   ->delete('[/]', \productoAPI::class . ':BorrarUno')
    * @apiSuccessExample {json} Baja exitosa:
    *     HTTP/1.1 200 OK
    *     {
    *       "Estado" => "Ok",
    *       "Mensaje" => "producto dado de baja con exito"
    *     }
    * @apiErrorExample Datos incorrectos o faltantes:
    *     {
    *       "Estado" => "Error",
    *       "Mensaje" => "Hay parametros faltantes"
    *     }
    * @apiErrorExample No se encontro el id:
    *     {
    *       "Estado" => "Error",
    *       "Mensaje" => "No se pudo dar de baja el producto"
    *     }
    */
    public function BorrarUno($request, $response, $args)
    {
        $ArrayDeParametros = $request->getParsedBody();
        $id = $ArrayDeParametros['id'];

        if(productoPDO::bajaproducto($id) != 1){
            $newBody = [
                "Estado" => "Error",
                "Mensaje" => "No se pudo dar de baja el producto"
            ];

            $response->getBody()->write(json_encode($newBody));
        }
        else{
            $newBody = [
                "Estado" => "Ok",
                "Mensaje" => "producto dado de baja con exito"
            ];

            $response->getBody()->write(json_encode($newBody));
        }

        return $response;
    }

    /**
    * @api {put} /productos ModificarUno
    * @apiVersion 0.1.0
    * @apiName ModificarUno
    * @apiGroup productoAPI
    * @apiDescription (Admin) Modifica un producto
    *
    * @apiParam {Number} id Id del producto a modificar
    * @apiParam {String} email  Email del producto
    * @apiParam {String} password Password del producto
    * @apiParam {String="dia","tarde","noche"} turno Turno del producto
    * @apiParam {String="femenino","masculino"} sexo Sexo del producto
    * @apiParam {String="user","admin"} perfil Perfil del producto
    *
    * @apiExample Como usarlo:
    *   ->put('[/]', \productoAPI::class . ':ModificarUno')
    * @apiSuccessExample {json} Modificacion exitosa:
    *     HTTP/1.1 200 OK
    *     {
    *       "Estado" => "Ok",
    *       "Mensaje" => "producto modificado con exito"
    *     }
    * @apiErrorExample Datos incorrectos o faltantes:
    *     {
    *       "Estado" => "Error",
    *       "Mensaje" => "Hay parametros faltantes"
    *     }
    * @apiErrorExample No se encontro el id:
    *     {
    *       "Estado" => "Error",
    *       "Mensaje" => "No se pudo modificar el producto"
    *     }
    */
    public function ModificarUno($request, $response, $args)
    { 
        $ArrayDeParametros = $request->getParsedBody();

        $producto = new producto();
        $producto->descripcion = $ArrayDeParametros['descripcion'];
        $producto->tipo = $ArrayDeParametros['tipo'];
        $producto->fechavencimiento = $ArrayDeParametros['fechavencimiento'];
        $producto->precio = $ArrayDeParametros['precio'];        
        $producto->RutaDeFoto = $ArrayDeParametros['RutaDeFoto'];
        $producto->id = $ArrayDeParametros['id'];

        if(productoPDO::modificarproducto($producto) != 1){
            $newBody = [
                "Estado" => "Error",
                "Mensaje" => "No se pudo modificar el producto"
            ];

            $response->getBody()->write(json_encode($newBody));
        }
        else{
            $newBody = [
                "Estado" => "Ok",
                "Mensaje" => "producto modificado con exito"
            ];

            $response->getBody()->write(json_encode($newBody));
        }

        return $response;
    }

}


?>