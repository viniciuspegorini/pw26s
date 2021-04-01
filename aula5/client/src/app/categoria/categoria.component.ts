import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/categoria';
import { CategoriaService } from './categoria.service';
import { Message, ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  categorias: Categoria[];
  categoriaEdit = new Categoria();
  showDialog = false;
  msgs: Message[] = [];

  constructor(private categoriaService: CategoriaService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.categoriaService.findAll().subscribe( e => this.categorias = e);
  }

  newEntity() {
    this.categoriaEdit = new Categoria();
    this.showDialog = true;
  }

  save() {
    this.categoriaService.save(this.categoriaEdit).subscribe( e => {
      this.categoriaEdit = new Categoria();
      this.findAll();
      this.showDialog = false;
      this.messageService.add({severity: 'success', summary: 'Confirmado',
                    detail: 'Registro salvo com sucesso!'});
      },
      error => {
        this.messageService.add({severity: 'error', summary: 'Erro',
                    detail: 'Falha ao salvar o registro!'});
      }
    );
  }

  cancel() {
    this.showDialog = false;
    this.categoriaEdit = new Categoria();
  }

  edit(categoria: Categoria) {
    // this.generoEdit = genero;
    this.categoriaEdit = Object.assign({}, categoria);
    this.showDialog = true;
  }

  delete(categoria: Categoria) {
    this.confirmationService.confirm({
      message: 'Esta ação não poderá ser desfeita!',
      header: 'Deseja remover o registro?',
      acceptLabel: 'Confirmar',
      rejectLabel: 'Cancelar',
      accept: () => {
        this.categoriaService.delete(categoria.id).subscribe(() => {
          this.findAll();
          this.msgs = [{severity: 'success', summary: 'Confirmado',
                    detail: 'Registro removido com sucesso!'}];
        }, error => {
          this.msgs = [{severity: 'error', summary: 'Erro',
                    detail: 'Falha ao remover o registro!'}];
        });
      }
    });
  }
}
