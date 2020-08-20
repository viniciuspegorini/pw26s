import { Component, OnInit } from '@angular/core';
import { Genero } from '../genero';
import { GeneroService } from '../genero.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genero-form',
  templateUrl: './genero-form.component.html',
  styleUrls: ['./genero-form.component.scss']
})
export class GeneroFormComponent implements OnInit {

  genero: Genero;

  constructor(private generoService: GeneroService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.genero = new Genero();
    const id = Number(this.route.snapshot.params.id);
    if (id) {
      this.generoService.findOne(id).subscribe(e => {
        this.genero = e;
      });
    }
  }

  save(): void {
    this.generoService.save(this.genero).subscribe(e => {
      this.router.navigate(['genero']);
    }, error => {
    });
  }

  cancel(): void {
    this.router.navigate(['genero']);
  }

}
