import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {
  private apiUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient ) { }

  getPremio() {
    return this.http.get(this.apiUrl+"carton/premio");
  }
}
