import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './pages/usuario/crear-usuario/crear-usuario.component';
import { ListaUsuariosComponent } from './pages/usuario/lista-usuarios/lista-usuarios.component';

const routes: Routes = [
  {
    path:'crearUsuario',
    component:CrearUsuarioComponent
  },
  {
    path:'listaUsuarios',
    component:ListaUsuariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
