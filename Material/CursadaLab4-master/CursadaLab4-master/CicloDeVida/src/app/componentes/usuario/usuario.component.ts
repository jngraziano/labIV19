import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuario: Usuario = new Usuario();
  public listadoUsuarios: Array<Usuario> = Array<Usuario>();

  public vista: string = 'grilla';

  constructor() { }

  ngOnInit() {
  }

  AgregarUsuario() {
    const usuario = new Usuario();
    usuario.email = this.usuario.email;
    usuario.password = this.usuario.password;
    this.listadoUsuarios.push(usuario);
  }

  CambiarVista(valor) {
    this.vista = valor;
  }

}
