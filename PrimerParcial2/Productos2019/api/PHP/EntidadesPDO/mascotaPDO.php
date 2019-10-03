<?php

include_once $_SERVER['DOCUMENT_ROOT']."/PHP/Entidades/mascota.php";
include_once $_SERVER['DOCUMENT_ROOT']."/PHP/SQL/AccesoDatos.php";

abstract class mascotaPDO{

	public static function traermascotas()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta
		(
			 "
				SELECT * FROM mascotas AS emp
			 "
		);
		$consulta->execute();			
		return $consulta->fetchAll(PDO::FETCH_CLASS, "mascota");		
	}

	public static function traermascotaPorId($nombre)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta = $objetoAccesoDato->RetornarConsulta
		("
			SELECT * FROM mascotas WHERE nombre=:nombre
		");
		$consulta->bindValue(':nombre', $nombre, PDO::PARAM_INT);	
		$consulta->execute();			
		return $consulta->fetchAll(PDO::FETCH_CLASS, "mascota");		
	}

	public static function altamascota($mascota)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$returnValue = 1;

		$consulta = $objetoAccesoDato->RetornarConsulta
		(
			"
				INSERT INTO mascotas(nombre, tipo, fechaDeNacimiento, RutaDeFoto)
				VALUES(:nombre,:tipo,:fechaDeNacimiento,:RutaDeFoto)
			"
		);

		$consulta->bindValue(':nombre',$mascota->nombre, PDO::PARAM_STR);
		$consulta->bindValue(':tipo', $mascota->tipo, PDO::PARAM_STR);
		$consulta->bindValue(':fechaDeNacimiento', $mascota->fechaDeNacimiento, PDO::PARAM_STR);
		$consulta->bindValue(':RutaDeFoto', $mascota->RutaDeFoto, PDO::PARAM_STR);

		try{

			$returnValue = $consulta->execute();

		} catch (Exception $e){

			$returnValue = 0;

		}

		return $returnValue;
	}

	public static function bajamascota($id)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 

		$consulta = $objetoAccesoDato->RetornarConsulta
		(
			"
				DELETE FROM mascotas WHERE id=:id
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

	public static function modificarmascota($mascota)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$returnValue = 1;

		$consulta = $objetoAccesoDato->RetornarConsulta
		(
			"
				UPDATE mascotas
				SET 
					nombre=:nombre, 
					mail=:mail, 
					sexo=:sexo, 
					password=:password, 
					foto=:foto
				WHERE id=:id
			"
		);

		$consulta->bindValue(':nombre',$mascota->nombre, PDO::PARAM_STR);
		$consulta->bindValue(':mail', $mascota->mail, PDO::PARAM_STR);
		$consulta->bindValue(':sexo', $mascota->sexo, PDO::PARAM_STR);
		$consulta->bindValue(':password', $mascota->password, PDO::PARAM_STR);
		$consulta->bindValue(':foto', $mascota->foto, PDO::PARAM_STR);	
		$consulta->bindValue(':id', $mascota->id, PDO::PARAM_INT);	

		try{

			$consulta->execute();
			$returnValue = $consulta->rowCount();

		} catch (Exception $e){

			$returnValue = 0;

		}

		return $returnValue;
	}

	public static function traermascotaPormailYPassword($mail,$password)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta = $objetoAccesoDato->RetornarConsulta
		("
			SELECT id FROM mascotas WHERE mail=:mail AND password=:password
		");
		$consulta->bindValue(':mail', $mail, PDO::PARAM_STR);
		$consulta->bindValue(':password', $password, PDO::PARAM_STR);	
		$consulta->execute();			
		$queryResponse = $consulta->fetch(PDO::FETCH_ASSOC);
		return $queryResponse["id"];		
	}

	public static function traerIdmascotaPormail($mail)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta = $objetoAccesoDato->RetornarConsulta
		("
			SELECT id FROM mascotas WHERE mail=:mail
		");
		$consulta->bindValue(':mail', $mail, PDO::PARAM_STR);
		$consulta->execute();			
		$queryResponse = $consulta->fetch(PDO::FETCH_ASSOC);
		return $queryResponse["id"];		
	}
	

	/* ============================================================================================================== */

	public static function mascotaValidation($mail, $password)
	{
		$returnValue = 0;

		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta =$objetoAccesoDato->RetornarConsulta
		(
			 "
				SELECT id FROM mascotas WHERE mail=:mail AND password=:password
			 "
		);
		$consulta->bindValue(':mail', $mail, PDO::PARAM_STR);
		$consulta->bindValue(':password', $password, PDO::PARAM_STR);	
		$consulta->execute();

		return $consulta->rowCount();
	}


}

?>