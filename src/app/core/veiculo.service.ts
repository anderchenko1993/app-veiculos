import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  apiHost: string = environment.apiHost;

  constructor(private http: HttpClient) { }

  getVeiculos(): Observable<any> {
    return this.http.get(`${this.apiHost}/veiculos`);
  }

  getVeiculo(id: number): Observable<any> {
    return this.http.get(`${this.apiHost}/veiculos/${id}`);
  }

  addVeiculo(data): Observable<any> {
    return this.http.post(`${this.apiHost}/veiculos`, data);
  }

  updateVeiculo(data, id: number): Observable<any> {
    return this.http.put(`${this.apiHost}/veiculos/${id}`, data);
  }

  deleteVeiculo(id: number): Observable<any> {
    return this.http.delete(`${this.apiHost}/veiculos/${id}`);
  }
}
