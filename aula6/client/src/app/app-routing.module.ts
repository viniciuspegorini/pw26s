import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriaListComponent } from './categoria/categoria-list/categoria-list.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { ProdutoListComponent } from './produto/produto-list/produto-list.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';
import { MarcaListComponent } from './marca/marca-list/marca-list.component';
import { MarcaFormComponent } from './marca/marca-form/marca-form.component';
import { LoginService } from './login/login.service';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard.service';


const routes: Routes = [

  {
    path: '', canActivate: [LoginService], children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'categoria', component: CategoriaListComponent },
      { path: 'categoria/new', component: CategoriaFormComponent },
      { path: 'categoria/:id', component: CategoriaFormComponent },
      {
        path: 'marca', component: MarcaListComponent,
        canActivate: [AuthGuard],
        data: { roles: ['ROLE_ADMIN'] }
      },
      { path: 'marca/new', component: MarcaFormComponent },
      { path: 'marca/:id', component: MarcaFormComponent },
      {
        path: 'produto',
        component: ProdutoListComponent,
        canActivate: [AuthGuard],
        data: { roles: ['ROLE_ADMIN'] } // data: { roles: ['ROLE_ADMIN', 'ROLE_USER'] }
      },
      { path: 'produto/new', component: ProdutoFormComponent },
      { path: 'produto/:id', component: ProdutoFormComponent }
    ]
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
