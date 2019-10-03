<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

include_once $_SERVER['DOCUMENT_ROOT']."/composer/vendor/autoload.php";
include_once $_SERVER['DOCUMENT_ROOT']."/PHP/API/validationAPI.php";
include_once $_SERVER['DOCUMENT_ROOT']."/PHP/API/mascotaAPI.php";
include_once $_SERVER['DOCUMENT_ROOT']."/PHP/API/loginAPI.php";
include_once $_SERVER['DOCUMENT_ROOT']."/PHP/API/MWparaCORS.php";

$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;

$app = new \Slim\App(["settings" => $config]);

$app->group('/login', function () {
    
	$this->post('[/]', \loginAPI::class . ':CargarUno'); //Nuevo login y trae un SessionToken
	//{email} y {password}

})->add(\MWparaCORS::class . ':HabilitarCORSTodos');

$app->group('/mascotas', function () {
 
	/* [USADO] */ $this->get('[/]', \mascotaAPI::class . ':TraerTodos');

	/* [USADO] */ $this->get('/{nombre}', \mascotaAPI::class . ':traerUno');

	/* [USADO] */ $this->post('/alta', \mascotaAPI::class . ':CargarUno');

	/* [USADO] */ $this->post('/borrar', \mascotaAPI::class . ':BorrarUno');

	/* [USADO] */ $this->post('/modificar', \mascotaAPI::class . ':ModificarUno');

})->add(\MWparaCORS::class . ':HabilitarCORSTodos');

$app->run();