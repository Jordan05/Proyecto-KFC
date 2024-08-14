// src/app/registro/registro.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Actualiza la ruta si es necesario

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  name: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister(): void {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    this.authService.register(this.name, this.lastName, this.email, this.password).subscribe(response => {
      this.router.navigate(['/login']);
    });
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
