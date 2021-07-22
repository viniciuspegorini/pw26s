import { Injectable } from '@angular/core';
import { Marca } from '../model/marca';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CrudService } from 'src/app/generic/crud.service';

@Injectable({
  providedIn: 'root'
})
export class MarcaService extends CrudService<Marca, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/marca', http);
  }

}