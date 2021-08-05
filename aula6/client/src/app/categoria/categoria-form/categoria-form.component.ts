import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriaService } from '../service/categoria.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute) {

    this.form = this.fb.group(
      {
        id: [null],
        nome: [null, Validators.required]
      });
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.params.id);
    if (id) {
      this.categoriaService.findOne(id).subscribe(e => {
        this.form.patchValue(e);
      });
    }
  }

  onSubmit() {
    const categoria = this.form.getRawValue();
    this.categoriaService.save(categoria).subscribe(e => {
      this.router.navigate(['categoria']);
    }, error => {
    });
  }
}
