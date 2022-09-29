import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar/navbar.component';
import { CrearUsuarioComponent } from './pages/usuario/crear-usuario/crear-usuario.component';
import { ListaUsuariosComponent } from './pages/usuario/lista-usuarios/lista-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CrearUsuarioComponent,
    ListaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
