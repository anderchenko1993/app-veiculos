import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Veiculo } from '../veiculo/veiculo';

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
    return this.http.get(`${this.apiHost}/veiculos/${id}`).pipe(
      map((veiculo: Veiculo) => ({ ...veiculo, vendido: veiculo.vendido ? 1 : 0 })),
    );
  }

  addVeiculo(data: Veiculo): Observable<any> {
    return this.http.post(`${this.apiHost}/veiculos`, data);
  }

  updateVeiculo(data: Veiculo, id: number): Observable<any> {
    return this.http.put(`${this.apiHost}/veiculos/${id}`, data);
  }

  deleteVeiculo(id: number): Observable<any> {
    return this.http.delete(`${this.apiHost}/veiculos/${id}`);
  }
}
