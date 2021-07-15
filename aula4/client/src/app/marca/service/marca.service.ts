import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Marca } from '../model/marca';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(private httpClient: HttpClient) { }

  private getUrl(): string {
    return environment.api + '/marca';
  }

  findAll(): Observable<Marca[]> {
    const url = `${this.getUrl()}`;
    return this.httpClient.get<Marca[]>(url);
  }
}
