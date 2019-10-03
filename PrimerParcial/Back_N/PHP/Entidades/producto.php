<?php
class producto
{
    public $id;
    public $descripcion;
    public $tipo;
    public $fechavencimiento;
    public $Precio;
    public $RutaDeFoto;

  	public function __toString()
    {
      return $this->id." ".$this->descripcion." ".$this->tipo." ".$this->fechavencimiento." ".$this->Precio." ".$this->RutaDeFoto;
    }

    public function expose() {
      return get_object_vars($this);
    }

}


?>