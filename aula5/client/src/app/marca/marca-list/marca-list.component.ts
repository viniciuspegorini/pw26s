import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/categoria/model/categoria';
import { MarcaService } from '../service/marca.service';

@Component({
  selector: 'app-marca-list',
  templateUrl: './marca-list.component.html',
  styleUrls: ['./marca-list.component.scss']
})
export class MarcaListComponent implements OnInit {

  marcas: Categoria[] = [];

  constructor(private marcaService: MarcaService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.marcaService.findAll().subscribe(e => this.marcas = e);
  }

  delete(id: number) {
    this.marcaService.delete(id).subscribe( () => {
      this.findAll();
    });
  }

}
