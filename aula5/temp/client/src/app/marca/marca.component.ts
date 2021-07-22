import { Component, OnInit } from '@angular/core';
import { Marca } from '../model/marca';
import { Message, ConfirmationService, MessageService } from 'primeng/api';
import { MarcaService } from './marca.service';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.scss']
})
export class MarcaComponent implements OnInit {

  marcas: Marca[];
  marcaEdit = new Marca();
  showDialog = false;
  msgs: Message[] = [];

  constructor(private marcaService: MarcaService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.marcaService.findAll().subscribe( e => this.marcas = e);
  }

  newEntity() {
    this.marcaEdit = new Marca();
    this.showDialog = true;
  }

  cancel() {
    this.showDialog = false;
  }

  edit(marca: Marca) {
    this.marcaEdit = Object.assign({}, marca);
    this.showDialog = true;
  }

  save() {
    this.marcaService.save(this.marcaEdit).subscribe(e => {
      this.marcaEdit = new Marca();
      this.findAll();
      this.showDialog = false;
      this.messageService.add({severity: 'success', summary: 'Confirmado',
      detail: 'Registro salvo com sucesso!'});
    },
      error => {
      this.messageService.add({severity: 'error', summary: 'Erro',
            detail: 'Falha ao salvar o registro!'});
    });
  }

  delete(marca: Marca) {
    this.confirmationService.confirm({
      message: 'Esta ação não poderá ser desfeita!',
      header: 'Deseja remover o registro?',
      acceptLabel: 'Confirmar',
      rejectLabel: 'Cancelar',
      accept: () => {
        this.marcaService.delete(marca.id).subscribe(() => {
          this.findAll();
          this.messageService.add({severity: 'success', summary: 'Confirmado',
                    detail: 'Registro removido com sucesso!'});
        }, error => {
          this.messageService.add({severity: 'error', summary: 'Erro',
                    detail: 'Falha ao remover o registro!'});
        });
      }
    });
  }
}
