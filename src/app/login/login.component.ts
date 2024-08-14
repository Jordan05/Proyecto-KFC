// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Actualiza la ruta si es necesario

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login(this.email, this.password).subscribe(response => {
      if (response && response.data && response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        this.router.navigate(['/home']);  // Redirige a la página principal después de iniciar sesión
      } else {
        alert('Error al iniciar sesión');
      }
    });
  }

  goToRegister(): void {
    this.router.navigate(['/registro']);
  }
}
