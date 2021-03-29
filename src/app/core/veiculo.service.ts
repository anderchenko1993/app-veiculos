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

  list(): Observable<any> {
    return this.http.get(`${this.apiHost}/veiculos`);
  }

  add(data): Observable<any> {
    return this.http.post(`${this.apiHost}/veiculos/add`, data);
  }

  update(data, id): Observable<any> {
    return this.http.put(`${this.apiHost}/veiculos/${id}`, data);
  }

  show(id): Observable<any> {
    return this.http.get(`${this.apiHost}/veiculos/${id}`);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${this.apiHost}/veiculos/${id}`);
  }

}
