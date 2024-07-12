import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Debe ser 'styleUrls' en lugar de 'styleUrl'
})
export class HomeComponent {
  message: string;

  constructor() {
    this.message = 'Bienvenido a la página de inicio!';
  }
}
