<?php

include_once $_SERVER['DOCUMENT_ROOT']."/PHP/Entidades/mascota.php";
include_once $_SERVER['DOCUMENT_ROOT']."/PHP/Interfaces/IApiUsable.php";
include_once $_SERVER['DOCUMENT_ROOT']."/PHP/EntidadesPDO/mascotaPDO.php";

class mascotaAPI extends mascota implements IApiUsable{

    /**
    * @api {get} /mascotas TraerTodos
    * @apiVersion 0.1.0
    * @apiName TraerTodos
    * @apiGroup mascotaAPI
    * @apiDescription Trae informacion de todos los mascotas
    * @apiParam {String} [CSV] Opcional, se coloca este parametro si se quiere guardar el resultado de la busqueda en un archivo CSV. El valor que se pasa en este parametro sera el nombre del archivo guardado en API/PHP/Busquedas
    * @apiParam {String} [PDF] Opcional, se coloca este parametro si se quiere guardar el resultado de la busqueda en un archivo PDF. El valor que se pasa en este parametro sera el nombre del archivo guardado en API/PHP/Busquedas
    *
    * @apiExample Como usarlo:
    *   ->get('[/]', \mascotaAPI::class . ':TraerTodos')
    * @apiSuccess {Object[]} mascotas Trae un array de mascotas con todos los datos de los mismos
    */
    public function TraerTodos($request, $response, $args)
    {
        $mascotas = mascotaPDO::traermascotas();
        $response = $response->withJson($mascotas, 200, JSON_UNESCAPED_UNICODE);  
        return $response;
    }

    /**
    * @api {get} /mascotas TraerUno
    * @apiVersion 0.1.0
    * @apiName TraerUno
    * @apiGroup mascotaAPI
    * @apiDescription Trae informacion de un mascota, buscado por id
    *
    * @apiParam {Number} id Id del mascota a buscar
    *
    * @apiExample Como usarlo:
    *   ->get('/{id}', \mascotaAPI::class . ':traerUno')
    * @apiSuccess {Object[]} mascota Informacion del mascota encontrado
    */
    public function TraerUno($request, $response, $args)
    {
        $nombre = $args['nombre'];
        $mascota = mascotaPDO::traermascotaPorId($nombre);
        $response = $response->withJson($mascota, 200);  
        return $response;
    }

    /**
    * @api {post} /mascotas CargarUno
    * @apiVersion 0.1.0
    * @apiName CargarUno
    * @apiGroup mascotaAPI
    * @apiDescription (Admin) Da de alta un nuevo mascota
    *
    * @apiParam {String} email  Email del mascota
    * @apiParam {String} password Password del mascota
    * @apiParam {String="dia","tarde","noche"} turno Turno del mascota
    * @apiParam {String="femenino","masculino"} sexo Sexo del mascota
    * @apiParam {String="user","admin"} perfil Perfil del mascota
    *
    * @apiExample Como usarlo:
    *   ->post('[/]', \vehiculoAPI::class . ':CargarUno')
    * @apiSuccessExample {json} Alta exitosa:
    *     HTTP/1.1 200 OK
    *     {
    *       "Estado" => "Ok",
    *       "Mensaje" => "mascota dado de alta con exito"
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

        $mascota = new mascota();
        $mascota->nombre = $ArrayDeParametros['nombre'];
        $mascota->tipo = $ArrayDeParametros['tipo'];
        $mascota->fechaDeNacimiento = $ArrayDeParametros['fechaDeNacimiento'];
        $mascota->RutaDeFoto = NULL;

        if(mascotaPDO::altamascota($mascota) != 1){
            $newBody = [
                "Estado" => "Error",
                "Mensaje" => "No se pudo dar de alta el mascota"
            ];

            $response->getBody()->write(json_encode($newBody));
        }
        else{
            $newBody = [
                "Estado" => "Ok",
                "Mensaje" => "mascota dado de alta con exito"
            ];

            $response->getBody()->write(json_encode($newBody));
        }

        return $response;
    }

    /**
    * @api {delete} /mascotas BorrarUno
    * @apiVersion 0.1.0
    * @apiName BorrarUno
    * @apiGroup mascotaAPI
    * @apiDescription (Admin) Da de baja un mascota
    *
    * @apiParam {Number} id  Id del mascota a dar de baja
    *
    * @apiExample Como usarlo:
    *   ->delete('[/]', \mascotaAPI::class . ':BorrarUno')
    * @apiSuccessExample {json} Baja exitosa:
    *     HTTP/1.1 200 OK
    *     {
    *       "Estado" => "Ok",
    *       "Mensaje" => "mascota dado de baja con exito"
    *     }
    * @apiErrorExample Datos incorrectos o faltantes:
    *     {
    *       "Estado" => "Error",
    *       "Mensaje" => "Hay parametros faltantes"
    *     }
    * @apiErrorExample No se encontro el id:
    *     {
    *       "Estado" => "Error",
    *       "Mensaje" => "No se pudo dar de baja el mascota"
    *     }
    */
    public function BorrarUno($request, $response, $args)
    {
        $ArrayDeParametros = $request->getParsedBody();
        $id = $ArrayDeParametros['id'];

        if(mascotaPDO::bajamascota($id) != 1){
            $newBody = [
                "Estado" => "Error",
                "Mensaje" => "No se pudo dar de baja el mascota"
            ];

            $response->getBody()->write(json_encode($newBody));
        }
        else{
            $newBody = [
                "Estado" => "Ok",
                "Mensaje" => "mascota dado de baja con exito"
            ];

            $response->getBody()->write(json_encode($newBody));
        }

        return $response;
    }

    /**
    * @api {put} /mascotas ModificarUno
    * @apiVersion 0.1.0
    * @apiName ModificarUno
    * @apiGroup mascotaAPI
    * @apiDescription (Admin) Modifica un mascota
    *
    * @apiParam {Number} id Id del mascota a modificar
    * @apiParam {String} email  Email del mascota
    * @apiParam {String} password Password del mascota
    * @apiParam {String="dia","tarde","noche"} turno Turno del mascota
    * @apiParam {String="femenino","masculino"} sexo Sexo del mascota
    * @apiParam {String="user","admin"} perfil Perfil del mascota
    *
    * @apiExample Como usarlo:
    *   ->put('[/]', \mascotaAPI::class . ':ModificarUno')
    * @apiSuccessExample {json} Modificacion exitosa:
    *     HTTP/1.1 200 OK
    *     {
    *       "Estado" => "Ok",
    *       "Mensaje" => "mascota modificado con exito"
    *     }
    * @apiErrorExample Datos incorrectos o faltantes:
    *     {
    *       "Estado" => "Error",
    *       "Mensaje" => "Hay parametros faltantes"
    *     }
    * @apiErrorExample No se encontro el id:
    *     {
    *       "Estado" => "Error",
    *       "Mensaje" => "No se pudo modificar el mascota"
    *     }
    */
    public function ModificarUno($request, $response, $args)
    { 
        $ArrayDeParametros = $request->getParsedBody();

        $mascota = new mascota();
        $mascota->nombre = $ArrayDeParametros['nombre'];
        $mascota->tipo = $ArrayDeParametros['tipo'];
        $mascota->fechaDeNacimiento = $ArrayDeParametros['fechaDeNacimiento'];
        $mascota->RutaDeFoto = $ArrayDeParametros['RutaDeFoto'];
        $mascota->id = $ArrayDeParametros['id'];

        if(mascotaPDO::modificarmascota($mascota) != 1){
            $newBody = [
                "Estado" => "Error",
                "Mensaje" => "No se pudo modificar el mascota"
            ];

            $response->getBody()->write(json_encode($newBody));
        }
        else{
            $newBody = [
                "Estado" => "Ok",
                "Mensaje" => "mascota modificado con exito"
            ];

            $response->getBody()->write(json_encode($newBody));
        }

        return $response;
    }

}


?>