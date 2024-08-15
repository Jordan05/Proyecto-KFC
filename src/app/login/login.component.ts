import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

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
    this.authService.login(this.email, this.password).subscribe({
      next: response => {
        if (response && response.token) {
          this.authService.saveToken(response.token); // Guarda el token usando el nombre correcto
          this.router.navigate(['/home']);  // Redirige a la página principal después de iniciar sesión
        } else {
          alert('Error al iniciar sesión');
        }
      },
      error: err => {
        console.error('Error de inicio de sesión', err);
        alert('Error al iniciar sesión');
      }
    });
  }

  goToRegister(): void {
    this.router.navigate(['/registro']);
  }
}
