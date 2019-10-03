<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

include_once $_SERVER['DOCUMENT_ROOT']."/Back_N/vendor/autoload.php";
include_once $_SERVER['DOCUMENT_ROOT']."/Back_N/PHP/API/validationAPI.php";
include_once $_SERVER['DOCUMENT_ROOT']."/Back_N/PHP/API/productoAPI.php";
include_once $_SERVER['DOCUMENT_ROOT']."/Back_N/PHP/API/loginAPI.php";
include_once $_SERVER['DOCUMENT_ROOT']."/Back_N/PHP/API/MWparaCORS.php";

$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;

$app = new \Slim\App(["settings" => $config]);

$app->group('/login', function () {
    
	$this->post('[/]', \loginAPI::class . ':CargarUno'); //Nuevo login y trae un SessionToken
	//{email} y {password}

// })->add(\MWparaCORS::class . ':HabilitarCORSTodos');
});

$app->group('/productos', function () {
 
	/* [USADO] */ $this->get('[/]', \productoAPI::class . ':TraerTodos');

	/* [USADO] */ $this->get('/{descripcion}', \productoAPI::class . ':traerUno');

	/* [USADO] */ $this->post('/alta', \productoAPI::class . ':CargarUno');

	/* [USADO] */ $this->post('/borrar', \productoAPI::class . ':BorrarUno');

	/* [USADO] */ $this->post('/modificar', \productoAPI::class . ':ModificarUno');

// })->add(\MWparaCORS::class . ':HabilitarCORSTodos');
})->add(function ($req, $res, $next) {
  $response = $next($req, $res);
  return $response
          ->withHeader('Access-Control-Allow-Origin', '*')
          ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
          ->withHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
});

$app->run();