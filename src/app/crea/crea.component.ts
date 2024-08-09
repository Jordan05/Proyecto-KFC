import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './crea.component.html',
  styleUrls: ['./crea.component.css']
})
export class CreaComponent implements OnInit {
  products: any[] = [];

  ngOnInit() {
    this.products = [
      { name: 'Juan', price: 'Pérez', category: 'example@gmail.com' }
    ];
  }
}
