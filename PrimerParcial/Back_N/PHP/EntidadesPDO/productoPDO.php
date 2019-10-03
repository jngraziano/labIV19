<?php

include_once $_SERVER['DOCUMENT_ROOT']."/Back_N/PHP/Entidades/producto.php";
include_once $_SERVER['DOCUMENT_ROOT']."/Back_N/PHP/SQL/AccesoDatos.php";

abstract class productoPDO{

	public static function traerproductos()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta
		(
			 "
				SELECT * FROM productos 
			 "
		);
		$consulta->execute();			
		return $consulta->fetchAll(PDO::FETCH_CLASS, "producto");		
	}

	public static function traerproductoPorId($descripcion)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta = $objetoAccesoDato->RetornarConsulta
		("
			SELECT * FROM productos WHERE descripcion=:descripcion
		");
		$consulta->bindValue(':descripcion', $descripcion, PDO::PARAM_INT);	
		$consulta->execute();			
		return $consulta->fetchAll(PDO::FETCH_CLASS, "producto");		
	}

	public static function altaproducto($producto)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$returnValue = 1;

		$consulta = $objetoAccesoDato->RetornarConsulta
		(
			"
				INSERT INTO productos(descripcion, tipo, fechavencimiento, precio RutaDeFoto)
				VALUES(:descripcion,:tipo,:fechavencimiento,:precio,:RutaDeFoto)
			"
		);

		$consulta->bindValue(':descripcion',$producto->descripcion, PDO::PARAM_STR);
		$consulta->bindValue(':tipo', $producto->tipo, PDO::PARAM_STR);
		$consulta->bindValue(':precio', $producto->precio, PDO::PARAM_STR);
		$consulta->bindValue(':fechavencimiento', $producto->fechavencimiento, PDO::PARAM_STR);
		$consulta->bindValue(':RutaDeFoto', $producto->RutaDeFoto, PDO::PARAM_STR);

		try{

			$returnValue = $consulta->execute();

		} catch (Exception $e){

			$returnValue = 0;

		}

		return $returnValue;
	}

	public static function bajaproducto($id)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 

		$consulta = $objetoAccesoDato->RetornarConsulta
		(
			"
				DELETE FROM productos WHERE id=:id
			"
		);
		$consulta->bindValue(':id', $id, PDO::PARAM_INT);

		try{

			$consulta->execute();
			$returnValue = $consulta->rowCount();

		} catch (Exception $e){

			$returnValue = 0;

		}

		return $returnValue;
	}

	public static function modificarproducto($producto)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$returnValue = 1;

		$consulta = $objetoAccesoDato->RetornarConsulta
		(
			"
				UPDATE productos
				SET 
					nombre=:nombre, 
					mail=:mail, 
					sexo=:sexo, 
					password=:password, 
					foto=:foto
				WHERE id=:id
			"
		);

		$consulta->bindValue(':nombre',$producto->nombre, PDO::PARAM_STR);
		$consulta->bindValue(':mail', $producto->mail, PDO::PARAM_STR);
		$consulta->bindValue(':sexo', $producto->sexo, PDO::PARAM_STR);
		$consulta->bindValue(':password', $producto->password, PDO::PARAM_STR);
		$consulta->bindValue(':foto', $producto->foto, PDO::PARAM_STR);	
		$consulta->bindValue(':id', $producto->id, PDO::PARAM_INT);	

		try{

			$consulta->execute();
			$returnValue = $consulta->rowCount();

		} catch (Exception $e){

			$returnValue = 0;

		}

		return $returnValue;
	}

	public static function traerproductoPormailYPassword($mail,$password)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta = $objetoAccesoDato->RetornarConsulta
		("
			SELECT id FROM productos WHERE mail=:mail AND password=:password
		");
		$consulta->bindValue(':mail', $mail, PDO::PARAM_STR);
		$consulta->bindValue(':password', $password, PDO::PARAM_STR);	
		$consulta->execute();			
		$queryResponse = $consulta->fetch(PDO::FETCH_ASSOC);
		return $queryResponse["id"];		
	}

	public static function traerIdproductoPormail($mail)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta = $objetoAccesoDato->RetornarConsulta
		("
			SELECT id FROM productos WHERE mail=:mail
		");
		$consulta->bindValue(':mail', $mail, PDO::PARAM_STR);
		$consulta->execute();			
		$queryResponse = $consulta->fetch(PDO::FETCH_ASSOC);
		return $queryResponse["id"];		
	}
	

	/* ============================================================================================================== */

	public static function productoValidation($mail, $password)
	{
		$returnValue = 0;

		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta =$objetoAccesoDato->RetornarConsulta
		(
			 "
				SELECT id FROM productos WHERE mail=:mail AND password=:password
			 "
		);
		$consulta->bindValue(':mail', $mail, PDO::PARAM_STR);
		$consulta->bindValue(':password', $password, PDO::PARAM_STR);	
		$consulta->execute();

		return $consulta->rowCount();
	}


}

?>