<?php
include_once("AccesoDatos.php");

class Producto
{
    public $id;
    public $descripcion;
    public $tipo;
    public $fechaDeVencimiento;
    public $precio;
    public $rutaDeFoto;
    
    public static function ListarProductos()
    {
        try {
            $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
            
            $consulta = $objetoAccesoDato->RetornarConsulta("SELECT p.id, p.descripcion, p.tipo, p.fechaDeVencimiento, p.precio, p.rutaDeFoto FROM productos p");
            
            $consulta->execute();
            
            $respuesta = $consulta->fetchAll(PDO::FETCH_CLASS, "Producto");
        } catch (Exception $e) {
            $mensaje = $e->getMessage();
            $respuesta = array("Estado" => "ERROR", "Mensaje" => "$mensaje");
        }
        finally {
            return $respuesta;
        }
    }
    
    public static function BajaProductos($id_empleado)
    {
        try {
            $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
            $consulta = $objetoAccesoDato->RetornarConsulta("DELETE FROM `productos` WHERE id = :id");
            
            $consulta->bindValue(':id', $id_empleado, PDO::PARAM_INT);
            
            $consulta->execute();
            
            $respuesta = array("Estado" => "OK", "Mensaje" => "Producto dado de baja.");
        } catch (Exception $e) {
            $mensaje = $e->getMessage();
            $respuesta = array("Estado" => "ERROR", "Mensaje" => "$mensaje");
        }
        finally {
            return $respuesta;
        }
    }
    
    public static function AltaProductos($descripcion, $tipo, $fechaDeVencimiento, $precio, $rutaDeFoto)
    {
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
        $respuesta = "";
        try {
            $consulta = $objetoAccesoDato->RetornarConsulta("INSERT INTO productos (descripcion, tipo, fechaDeVencimiento, precio, rutaDeFoto)
            VALUES(:descripcion, :tipo, :fechaDeVencimiento, :precio, :rutaDeFoto)");
            
            $consulta->bindValue(':descripcion', $descripcion, PDO::PARAM_STR);
            $consulta->bindValue(':tipo', $tipo, PDO::PARAM_STR);
            $consulta->bindValue(':fechaDeVencimiento', $fechaDeVencimiento, PDO::PARAM_STR);
            $consulta->bindValue(':precio', $precio, PDO::PARAM_STR);
            $consulta->bindValue(':rutaDeFoto', $rutaDeFoto, PDO::PARAM_STR);
            
            $consulta->execute();
            
            $respuesta = array("Estado" => "OK", "Mensaje" => "Porducto registrado exitosamente.");
        } catch (Exception $e) {
            $mensaje = $e->getMessage();
            $respuesta = array("Estado" => "ERROR", "Mensaje" => "$mensaje");
        }
        finally {
            return $respuesta;
        }
    }

    public static function ModificarProductos($id, $descripcion, $tipo, $fechaDeVencimiento, $precio, $rutaDeFoto)
    {
        try {
            $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
            $consulta = $objetoAccesoDato->RetornarConsulta("UPDATE productos set descripcion = :descripcion, tipo = :tipo, fechaDeVencimiento = :fechaDeVencimiento, precio = :precio, rutaDeFoto = :rutaDeFoto WHERE id = :id");
            
            $consulta->bindValue(':id', $id, PDO::PARAM_INT);
            $consulta->bindValue(':descripcion', $descripcion, PDO::PARAM_STR);
            $consulta->bindValue(':tipo', $tipo, PDO::PARAM_STR);
            $consulta->bindValue(':fechaDeVencimiento', $fechaDeVencimiento, PDO::PARAM_STR);
            $consulta->bindValue(':precio', $precio, PDO::PARAM_STR);
            $consulta->bindValue(':rutaDeFoto', $rutaDeFoto, PDO::PARAM_STR);
            
            $consulta->execute();
            
            $respuesta = array("Estado" => "OK", "Mensaje" => "Empleado modificado correctamente.");
            
        } catch (Exception $e) {
            $mensaje = $e->getMessage();
            $respuesta = array("Estado" => "ERROR", "Mensaje" => "$mensaje");
        }
        finally {
            return $respuesta;
        }
    }
    
    
    
}

?>