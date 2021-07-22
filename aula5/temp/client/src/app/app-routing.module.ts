import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { MarcaComponent } from './marca/marca.component';
import { ProdutoComponent } from './produto/produto.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [{
  path: '', canActivate: [LoginService], children: [
      { path: 'principal', component: PrincipalComponent },
      { path: '', redirectTo: 'principal', pathMatch: 'full' },
      { path: 'categoria', component: CategoriaComponent },
      { path: 'marca', component: MarcaComponent },
      {
        path: 'produto',
        component: ProdutoComponent,
        canActivate: [AuthGuard],
        data: { roles: ['ROLE_ADMIN', 'ROLE_USER'] }
      }
    ]
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
