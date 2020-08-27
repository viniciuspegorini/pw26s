import { Injectable } from '@angular/core';
import { CrudService } from '../generic/crud.service';
import { Genero } from './genero';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneroService extends CrudService<Genero, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/genero', http);
  }

}
