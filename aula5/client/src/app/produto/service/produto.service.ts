import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CrudService } from 'src/app/generic/crud.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends CrudService<Produto, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/produto', http);
  }
}
