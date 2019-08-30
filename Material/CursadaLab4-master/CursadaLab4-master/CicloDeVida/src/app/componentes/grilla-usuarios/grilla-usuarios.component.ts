import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-grilla-usuarios',
  templateUrl: './grilla-usuarios.component.html',
  styleUrls: ['./grilla-usuarios.component.css']
})
export class GrillaUsuariosComponent implements OnInit {
  @Input() listadoUsuarios: Array<Usuario> = Array<Usuario>();
  constructor() { }

  ngOnInit() {
  }

}
