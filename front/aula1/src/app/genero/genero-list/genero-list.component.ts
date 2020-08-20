import { Component, OnInit } from '@angular/core';
import { Genero } from '../genero';
import { GeneroService } from '../genero.service';

@Component({
  selector: 'app-genero-list',
  templateUrl: './genero-list.component.html',
  styleUrls: ['./genero-list.component.scss']
})
export class GeneroListComponent implements OnInit {

  generos: Genero[];

  constructor(private generoService: GeneroService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.generoService.findAll().subscribe(e => this.generos = e);
  }

  delete(id: number): void {
    this.generoService.delete(id).subscribe(() => {
      this.findAll();
    });
  }

}
