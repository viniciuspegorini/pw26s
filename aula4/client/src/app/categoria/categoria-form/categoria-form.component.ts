import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent implements OnInit {

  categoria = new Categoria();

  constructor(private categoriaService: CategoriaService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.params.id);
    if (id) {
      this.categoriaService.findOne(id).subscribe(e => {
        this.categoria = e;
        console.log(e);
      });
    }
  }

  save() {
    this.categoriaService.save(this.categoria).subscribe(e => {
      this.router.navigate(['categoria']);
    }, error => {
    });
  }

  cancel() {
    this.router.navigate(['categoria']);
  }

}
