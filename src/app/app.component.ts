import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: any[] = [];

  ngOnInit() {
    this.products = [
      { name: 'Producto 1', price: 100, category: 'Categoría A' },
      { name: 'Producto 2', price: 200, category: 'Categoría B' },
      { name: 'Producto 3', price: 300, category: 'Categoría C' }
    ];
  }
}
