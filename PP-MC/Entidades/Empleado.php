<?php
include_once("AccesoDatos.php");
class Empleado
{
    public $id;
    public $nombre;
    public $usuario;
    public $perfil;
    public $estado;
    
    public static function Login($usuario, $clave)
    {
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
        
        $consulta = $objetoAccesoDato->RetornarConsulta("SELECT u.id, u.nombre, u.perfil FROM empleados u WHERE u.usuario = :usuario 
        AND u.clave = :clave AND u.estado = 'Activo'");
        
        $consulta->bindValue(':usuario', $usuario, PDO::PARAM_STR);
        $consulta->bindValue(':clave', $clave, PDO::PARAM_STR);
        
        $consulta->execute();
        
        $resultado = $consulta->fetch();
        return $resultado;
    }
    
    public static function ActualizarLogin($id_empleado)
    {
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
        
        date_default_timezone_set("America/Argentina/Buenos_Aires");
        $fecha = date('Y-m-d H:i:s');
        
        $consulta = $objetoAccesoDato->RetornarConsulta("UPDATE empleados SET ultimoLogin = :fecha WHERE id = :id");
        
        $consulta->bindValue(':fecha', $fecha, PDO::PARAM_STR);
        $consulta->bindValue(':id', $id_empleado, PDO::PARAM_INT);
        
        $consulta->execute();
    }
    
    public static function AltaEmpleados($nombre, $usuario, $clave, $perfil)
    {
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
        $respuesta = "";
        try {
            $consulta = $objetoAccesoDato->RetornarConsulta("INSERT INTO empleados (nombre, usuario, clave, perfil, estado)
            VALUES(:nombre, :usuario, :clave, :perfil, 'Activo')");
            
            $consulta->bindValue(':nombre', $nombre, PDO::PARAM_STR);
            $consulta->bindValue(':usuario', $usuario, PDO::PARAM_STR);
            $consulta->bindValue(':clave', $clave, PDO::PARAM_STR);
            $consulta->bindValue(':perfil', $perfil, PDO::PARAM_STR);
            
            $consulta->execute();
            
            $respuesta = array("Estado" => "OK", "Mensaje" => "Empleado registrado exitosamente.");
        } catch (Exception $e) {
            $mensaje = $e->getMessage();
            $respuesta = array("Estado" => "ERROR", "Mensaje" => "$mensaje");
        }
        finally {
            return $respuesta;
        }
    }
    
    public static function BajaEmpleados($id_empleado)
    {
        try {
            $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
            
            $consulta = $objetoAccesoDato->RetornarConsulta("UPDATE empleados SET estado = 'Inactivo' WHERE id = :id");
            
            $consulta->bindValue(':id', $id_empleado, PDO::PARAM_INT);
            
            $consulta->execute();
            
            $respuesta = array("Estado" => "OK", "Mensaje" => "Empleado dado de baja.");
        } catch (Exception $e) {
            $mensaje = $e->getMessage();
            $respuesta = array("Estado" => "ERROR", "Mensaje" => "$mensaje");
        }
        finally {
            return $respuesta;
        }
    }
    
    public static function SuspenderEmpleados($id_empleado)
    {
        try {
            $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
            
            $consulta = $objetoAccesoDato->RetornarConsulta("UPDATE empleados SET estado = 'Suspendido' WHERE id = :id");
            
            $consulta->bindValue(':id', $id_empleado, PDO::PARAM_INT);
            
            $consulta->execute();
            
            $respuesta = array("Estado" => "OK", "Mensaje" => "Empleado suspendido correctamente.");
        } catch (Exception $e) {
            $mensaje = $e->getMessage();
            $respuesta = array("Estado" => "ERROR", "Mensaje" => "$mensaje");
        }
        finally {
            return $respuesta;
        }
    }
    
    public static function ListarEmpleados()
    {
        try {
            $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
            
            $consulta = $objetoAccesoDato->RetornarConsulta("SELECT u.id, u.nombre, u.usuario, u.perfil, u.estado FROM empleados u WHERE u.estado = 'Activo'");
            
            $consulta->execute();
            
            $respuesta = $consulta->fetchAll(PDO::FETCH_CLASS, "Empleado");
        } catch (Exception $e) {
            $mensaje = $e->getMessage();
            $respuesta = array("Estado" => "ERROR", "Mensaje" => "$mensaje");
        }
        finally {
            return $respuesta;
        }
    }
    
    public static function ModificarEmpleados($id, $nombre, $usuario, $clave, $perfil)
    {
        try {
            $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
            $consulta = $objetoAccesoDato->RetornarConsulta("UPDATE empleados set nombre = :nombre, usuario = :usuario, clave = :clave, perfil = :perfil WHERE id = :id AND estado = 'Activo'");
            
            $consulta->bindValue(':id', $id, PDO::PARAM_INT);
            $consulta->bindValue(':nombre', $nombre, PDO::PARAM_STR);
            $consulta->bindValue(':usuario', $usuario, PDO::PARAM_STR);
            $consulta->bindValue(':clave', $clave, PDO::PARAM_STR);
            $consulta->bindValue(':perfil', $perfil, PDO::PARAM_STR);
            
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
    
    public static function SumarOperacionEmpleado($id)
    {
        try {
            $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
            $consulta = $objetoAccesoDato->RetornarConsulta("UPDATE empleados SET operaciones = operaciones + 1 WHERE id = :id AND estado = 'Activo'");
            
            $consulta->bindValue(':id', $id, PDO::PARAM_INT);
            
            $consulta->execute();
            
            $respuesta = array("Estado" => "OK", "Mensaje" => "Operación sumada correctamente.");
        } catch (Exception $e) {
            $mensaje = $e->getMessage();
            $respuesta = array("Estado" => "ERROR", "Mensaje" => "$mensaje");
        }
        finally {
            return $respuesta;
        }
    }
    
    
    public static function CantidadOperacionesEmpleado($id_empleado)
    {          
        try {
            $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
            
            $consulta = $objetoAccesoDato->RetornarConsulta("SELECT e.id, e.nombre, e.operaciones as CantidadOperaciones FROM empleados e WHERE id = :id AND estado = 'Activo'");
            
            $consulta->bindValue(':id', $id_empleado, PDO::PARAM_INT);
            
            $consulta->execute();
            
            $respuesta = $consulta->fetch();
        } catch (Exception $e) {
            $mensaje = $e->getMessage();
            $respuesta = array("Estado" => "ERROR", "Mensaje" => "$mensaje");
        }
        finally {
            return $respuesta;
        }
    }   
    
    
    
    public static function CantidadOperacionesPorSector()
    {
        try {
            $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
            
            $consulta = $objetoAccesoDato->RetornarConsulta("SELECT perfil as sector, SUM(e.operaciones) as CantidadOperaciones FROM empleados e GROUP BY(sector)");
            
            $consulta->execute();
            
            $respuesta = $consulta->fetchAll();
        } catch (Exception $e) {
            $mensaje = $e->getMessage();
            $respuesta = array("Estado" => "ERROR", "Mensaje" => "$mensaje");
        }
        finally {
            return $respuesta;
        }
    }
    
    public static function CantidadOperacionesEmpleadosPorSector($sector)
    {
        try {
            $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
            
            $consulta = $objetoAccesoDato->RetornarConsulta("SELECT e.id, e.nombre, e.operaciones as CantidadOperaciones FROM empleados e WHERE perfil = :sector");
            
            $consulta->bindValue(':sector', $sector, PDO::PARAM_STR);
            $consulta->execute();
            
            $respuesta = $consulta->fetchAll();
        } catch (Exception $e) {
            $mensaje = $e->getMessage();
            $respuesta = array("Estado" => "ERROR", "Mensaje" => "$mensaje");
        }
        finally {
            return $respuesta;
        }
    }
    
    public static function ListarLogin($fecha1, $fecha2)
    {
        try {
            $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
            
            $consulta = $objetoAccesoDato->RetornarConsulta("SELECT id, perfil, nombre, usuario, fechaRegistro, ultimoLogin, estado, operaciones
            FROM empleados WHERE ultimoLogin BETWEEN :fecha1 AND :fecha2");
            $consulta->bindValue(':fecha1', $fecha1, PDO::PARAM_STR);
            $consulta->bindValue(':fecha2', $fecha2, PDO::PARAM_STR);
            $consulta->execute();
            
            $respuesta = $consulta->fetchAll(PDO::FETCH_CLASS, "Empleado");
        } catch (Exception $e) {
            $mensaje = $e->getMessage();
            $respuesta = array("Estado" => "ERROR", "Mensaje" => "$mensaje");
        }
        finally {
            return $respuesta;
        }
    }
    
    public static function ListarRegistro($fecha1, $fecha2)
    {
        try {
            $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
            
            $consulta = $objetoAccesoDato->RetornarConsulta("SELECT id, perfil, nombre, usuario, fechaRegistro, ultimoLogin, estado, operaciones FROM empleados
            WHERE fechaRegistro BETWEEN :fecha1 AND :fecha2");
            $consulta->bindValue(':fecha1', $fecha1, PDO::PARAM_STR);
            $consulta->bindValue(':fecha2', $fecha2, PDO::PARAM_STR);
            $consulta->execute();
            
            $respuesta = $consulta->fetchAll(PDO::FETCH_CLASS, "Empleado");
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