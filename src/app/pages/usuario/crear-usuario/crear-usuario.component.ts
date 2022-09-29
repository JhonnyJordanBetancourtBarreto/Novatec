import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {

  usuarioForm!: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public usuarioService: UsuarioService,
  ) {}

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      primerNombre: ['', Validators.required],
      segundoNombre: ['', Validators.required],
      primerApellido: ['', Validators.required],
      segundoApellido: ['', Validators.required],
      numeroDocumento: ['', Validators.required],
      edad: ['', Validators.required],
      sexo: ['', Validators.required],
      correo: ['', Validators.required],
      rol: ['', Validators.required],
    });
  }

  guardar() {

    this.usuarioService.saveUsuario(this.usuarioForm.value).subscribe({
      complete: () => {
        console.log('se creó el usuario');
      },
      error: (err) => {
        console.log(err);
        /*Swal.fire({
          icon: 'error',
          html: this.mensajeError,
          confirmButtonColor: '#d33',
          confirmButtonText: 'aceptar',
        });*/
      }
    });
  }

}
