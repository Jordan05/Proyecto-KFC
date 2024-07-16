import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private tempData: any = {};

  constructor() { }

  // Método para mostrar un mensaje al usuario
  showMessage(message: string): void {
    alert(message); // Puedes reemplazar esto con una implementación más sofisticada de notificaciones
  }

  // Métodos para manejar datos temporales
  setTempData(key: string, value: any): void {
    this.tempData[key] = value;
  }

  getTempData(key: string): any {
    return this.tempData[key];
  }

  clearTempData(key: string): void {
    delete this.tempData[key];
  }

  // Ejemplo de método para manejar estados de la aplicación
  toggleSidebar(isOpen: boolean): void {
    // Aquí podrías implementar lógica para abrir o cerrar un panel lateral, por ejemplo
    console.log(`Sidebar is now ${isOpen ? 'open' : 'closed'}`);
  }
}
