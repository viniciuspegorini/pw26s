import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MarcaService } from '../service/marca.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-marca-form',
  templateUrl: './marca-form.component.html',
  styleUrls: ['./marca-form.component.scss']
})
export class MarcaFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private marcaService: MarcaService,
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
      this.marcaService.findOne(id).subscribe(e => {
        this.form.patchValue(e);        
      });
    }
  }

  onSubmit() {
    const marca = this.form.getRawValue();
    this.marcaService.save(marca).subscribe(e => {
      this.router.navigate(['marca']);
    }, error => {
    });
  }

}
