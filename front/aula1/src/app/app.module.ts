import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { GeneroListComponent } from './genero/genero-list/genero-list.component';
import { GeneroFormComponent } from './genero/genero-form/genero-form.component';
import { HttpClientModule } from '@angular/common/http';
import { GeneroService } from './genero/genero.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    GeneroListComponent,
    GeneroFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GeneroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
