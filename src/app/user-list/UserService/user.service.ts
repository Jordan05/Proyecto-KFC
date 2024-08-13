import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:5031/api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    const token = localStorage.getItem('authToken');  // O donde almacenes el token

    // Verifica que el token existe
    if (!token) {
      console.error('No token found');
      return new Observable();  // Puedes manejar este caso como consideres adecuado
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(this.apiUrl, { headers });
  }
}
