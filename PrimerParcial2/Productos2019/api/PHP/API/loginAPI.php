<?php

include_once $_SERVER['DOCUMENT_ROOT']."/PHP/Interfaces/IApiUsable.php";

class loginAPI implements IApiUsable{

    public function TraerTodos($request, $response, $args)
    {

    }

    public function TraerUno($request, $response, $args)
    {

    }

    /**
    * @api {post} /login CargarUno
    * @apiVersion 0.1.0
    * @apiName CargarUno
    * @apiGroup loginAPI
    * @apiDescription Logea al usuario, creando un session token, y crea un nuevo registro de login en el sistema
    *
    * @apiParam {String} mail  mail del usuario
    * @apiParam {String} password Password del usuario
    *
    * @apiExample Como usarlo:
    *   ->post('[/]', \loginAPI::class . ':CargarUno')
    * @apiSuccess {Object} SessionToken SessionToken del usuario
    * @apiError UserNotFound Usuario no encontrado, datos incorrectos o faltantes
    * @apiErrorExample No se encontro al usuario:
    *     {
    *       "Estado" => "Error",
    *       "Mensaje" => "Datos incorrectos"
    *     }
    */
    public function CargarUno($request, $response, $args)
    { 
        $ArrayDeParametros = $request->getParsedBody();

        $mail= $ArrayDeParametros['mail'];
        $password= $ArrayDeParametros['password'];

        $idUser = personaPDO::traerpersonaPormailYPassword($mail,$password);

        if($idUser != null){

            $user = personaPDO::traerpersonaPorId($idUser);

            $newUser = [
                "mail" => $user[0]->mail
            ];

            $newBody = [
                "SessionToken" => validationAPI::CrearToken($newUser)
            ];

        } else {

            $newBody = [
                "Estado" => "Error",
                "Mensaje" => "Datos incorrectos"
            ];

        }

        $response->getBody()->write(json_encode($newBody));
        
        return $response;
       
    }

    public function BorrarUno($request, $response, $args){ }

    public function ModificarUno($request, $response, $args){ }

}




?>