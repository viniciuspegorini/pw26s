import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/categoria/model/categoria';
import { CategoriaService } from 'src/app/categoria/service/categoria.service';
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

  form: FormGroup;
  marcas: Marca[] = [];
  categorias: Categoria[] = [];

  constructor(private fb: FormBuilder,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private marcaService: MarcaService,
    private router: Router,
    private route: ActivatedRoute) {
    this.form = this.fb.group(
      {
        id: [null],
        nome: [null, Validators.required],
        valor: [null, Validators.required],
        descricao: [null, Validators.required],
        categoria: [null, Validators.required],
        marca: [null, Validators.required]
      });
  }

  get categoria() {
    return this.form.get('categoria');
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  ngOnInit() {
    this.categoriaService.findAll().subscribe(e => this.categorias = e);
    this.marcaService.findAll().subscribe(e => this.marcas = e);
    const id = Number(this.route.snapshot.params.id);
    if (id) {
      this.produtoService.findOne(id).subscribe(e => {
        this.form.patchValue(e);
        // this.form.setValue(e);
        this.form.controls['categoria'].setValue(e.categoria, { onlySelf: true })
        console.log(e);
      });
    }
  }

  onSubmit() {
    const produto = this.form.getRawValue();
    this.produtoService.save(produto).subscribe(e => {
      this.router.navigate(['produto']);
    }, error => {
    });
  }
}
