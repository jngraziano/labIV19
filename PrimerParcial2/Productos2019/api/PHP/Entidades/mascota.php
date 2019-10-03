<?php
class mascota
{
    public $id;
    public $nombre;
    public $tipo;
    public $fechaDeNacimiento;
    public $RutaDeFoto;

  	public function __toString()
    {
      return $this->id." ".$this->nombre." ".$this->tipo." ".$this->fechaDeNacimiento." ".$this->RutaDeFoto;
    }

    public function expose() {
      return get_object_vars($this);
    }

}


?>