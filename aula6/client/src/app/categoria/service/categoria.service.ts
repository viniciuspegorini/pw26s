import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Categoria } from '../model/categoria';
import { CrudService } from 'src/app/generic/crud.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends CrudService<Categoria, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/categoria', http);
  }

}