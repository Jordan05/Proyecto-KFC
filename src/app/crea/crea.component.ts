// src/app/crea/crea.component.ts
import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../services/factura.service';

@Component({
  selector: 'app-crea',
  templateUrl: './crea.component.html',
  styleUrls: ['./crea.component.css']
})
export class CreaComponent implements OnInit {
  facturas: any[] = [];

  constructor(private facturaService: FacturaService) {}

  ngOnInit(): void {
    this.loadFacturas();
  }

  loadFacturas(): void {
    this.facturaService.getAll().subscribe(response => {
      if (response && response.data) {
        this.facturas = response.data;  // Asigna los datos a la variable facturas
        console.log('Facturas cargadas:', this.facturas);  // Asegúra de que los datos se están cargando
      } else {
        console.error('Error al cargar las facturas');
      }
    }, error => {
      console.error('Error al realizar la solicitud:', error);
    });
  }
}
