import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/categoria';
import { CategoriaService } from './categoria.service';
import { Message, ConfirmationService, MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  categorias: Categoria[];
  showDialog = false;
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private categoriaService: CategoriaService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) {
    this.form = this.fb.group(
      {
        id: [null],
        nome: ['', Validators.required]
      }
    );
  }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.categoriaService.findAll().subscribe(e => this.categorias = e);
  }

  newEntity() {
    this.form.reset();
    this.showDialog = true;
  }

  save() {
    const categoria = this.form.getRawValue();
    this.categoriaService.save(categoria).subscribe(e => {
      this.form.reset();
      this.findAll();
      this.showDialog = false;
      this.messageService.add({
        severity: 'success', summary: 'Confirmado',
        detail: 'Registro salvo com sucesso!'
      });
    },
      error => {
        this.messageService.add({
          severity: 'error', summary: 'Erro',
          detail: 'Falha ao salvar o registro!'
        });
      }
    );
  }

  cancel() {
    this.showDialog = false;
    this.form.reset();
  }

  edit(categoria: Categoria) {
    this.form.patchValue(categoria);
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
          this.messageService.add({
            severity: 'success', summary: 'Confirmado',
            detail: 'Registro removido com sucesso!'
          });
        }, error => {
          this.messageService.add({
            severity: 'error', summary: 'Erro',
            detail: 'Falha ao remover o registro!'
          });
        });
      }
    });
  }
}
