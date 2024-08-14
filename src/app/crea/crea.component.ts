import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../services/factura.service';

@Component({
  selector: 'app-crea',
  templateUrl: './crea.component.html',
  styleUrls: ['./crea.component.css']
})
export class CreaComponent implements OnInit {
  facturas: any[] = [];
  descripcion: string = '';

  constructor(private facturaService: FacturaService) {}

  ngOnInit(): void {
    this.loadFacturas();
  }

  loadFacturas(): void {
    this.facturaService.getAll().subscribe(data => {
      this.facturas = data;
    });
  }

  createFactura(): void {
    if (this.descripcion) {
      this.facturaService.create({ descripcion: this.descripcion }).subscribe(() => {
        this.loadFacturas();
        this.descripcion = '';
      });
    }
  }

  updateFactura(id: string, descripcion: string): void {
    this.facturaService.update(id, { descripcion }).subscribe(() => this.loadFacturas());
  }

  deleteFactura(id: string): void {
    this.facturaService.delete(id).subscribe(() => this.loadFacturas());
  }
}
