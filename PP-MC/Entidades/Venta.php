<?php
include_once("AccesoDatos.php");

class Venta
{
    public $id;
    public $idProducto;
    public $fechaDeVenta;
    public $cantidad;
    
    public static function ListarVentas()
    {
        try {
            $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
            
            $consulta = $objetoAccesoDato->RetornarConsulta("SELECT v.id, v.idProducto, v.fechaDeVenta, v.cantidad FROM ventas v");
            
            $consulta->execute();
            
            $respuesta = $consulta->fetchAll(PDO::FETCH_CLASS, "Venta");
        } catch (Exception $e) {
            $mensaje = $e->getMessage();
            $respuesta = array("Estado" => "ERROR", "Mensaje" => "$mensaje");
        }
        finally {
            return $respuesta;
        }
    }

    public static function AltaVentas($idProducto, $fechaDeVenta, $cantidad)
    {
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
        $respuesta = "";
        try {
            $consulta = $objetoAccesoDato->RetornarConsulta("INSERT INTO ventas (idProducto, fechaDeVenta, cantidad)
            VALUES(:idProducto, :fechaDeVenta, :cantidad)");
            
            $consulta->bindValue(':idProducto', $idProducto, PDO::PARAM_STR);
            $consulta->bindValue(':fechaDeVenta', $fechaDeVenta, PDO::PARAM_STR);
            $consulta->bindValue(':cantidad', $cantidad, PDO::PARAM_STR);
            
            $consulta->execute();
            
            $respuesta = array("Estado" => "OK", "Mensaje" => "Venta registrado exitosamente.");
        } catch (Exception $e) {
            $mensaje = $e->getMessage();
            $respuesta = array("Estado" => "ERROR", "Mensaje" => "$mensaje");
        }
        finally {
            return $respuesta;
        }
    }

}