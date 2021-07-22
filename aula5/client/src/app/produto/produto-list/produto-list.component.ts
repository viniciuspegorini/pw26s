import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss']
})
export class ProdutoListComponent implements OnInit {

  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.produtoService.findAll().subscribe(e => this.produtos = e);
  }

  delete(id: number) {
    this.produtoService.delete(id).subscribe( () => {
      this.findAll();
    });
  }

}
