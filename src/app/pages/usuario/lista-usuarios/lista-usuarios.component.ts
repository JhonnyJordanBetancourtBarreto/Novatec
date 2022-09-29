import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios!: Usuario[];

  constructor(
    public usuarioService: UsuarioService,
  ) {
    this.usuarios = new Array;
  }

  ngOnInit(): void {
    this.usuarioService.getAllUsuarios().subscribe(registros =>{
      for (let usuario of registros){
        this.usuarios.push(usuario);
      }
      return this.usuarios;
    });
  }
}
