import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/categoria/categoria';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { Marca } from 'src/app/marca/model/marca';
import { MarcaService } from 'src/app/marca/service/marca.service';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent implements OnInit {

  produto = new Produto();
  marcas: Marca[] = [];
  categorias: Categoria[] = [];

  constructor(private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private marcaService: MarcaService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.categoriaService.findAll().subscribe(e => this.categorias = e);
    this.marcaService.findAll().subscribe(e => this.marcas = e);
  }

  save() {
    this.produtoService.save(this.produto).subscribe(e => {
      this.router.navigate(['produto']);
    }, error => {
    });
  }

  cancel() {
    this.router.navigate(['produto']);
  }

  setCategoria(categoria: Categoria): void {
    this.produto.categoria = categoria;
  }

  setMarca(marca: Marca): void {
    this.produto.marca = marca;
  }

}
