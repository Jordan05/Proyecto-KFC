import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.loadUsuarios();
  }

  loadUsuarios(): void {
    this.usuarioService.getAll().subscribe(response => {
      if (response && response.data) {
        this.usuarios = response.data;  // Asigna los datos a la variable facturas
        console.log('Usuarios cargados:', this.usuarios);  // Asegúra de que los datos se están cargando
      } else {
        console.error('Error al cargar las usuarios');
      }
    }, error => {
      console.error('Error al realizar la solicitud:', error);
    });
  }
}
