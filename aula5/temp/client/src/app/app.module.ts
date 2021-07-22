import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Imports PrimeNG
// Imports PrimeNG
import {TableModule} from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {SpinnerModule} from 'primeng/spinner';
import {FileUploadModule} from 'primeng/fileupload';
import {TabViewModule} from 'primeng/tabview';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginService } from './login/login.service';
import { HttpClientInterceptor } from './http-client-interceptor';
import { AuthGuard } from './auth-guard.service';

import { MenuComponent } from './menu/menu.component';
import { PrincipalComponent } from './principal/principal.component';
import { MarcaComponent } from './marca/marca.component';
import { ProdutoComponent } from './produto/produto.component';

import { CategoriaService } from './categoria/categoria.service';
import { MarcaService } from './marca/marca.service';
import { ProdutoService } from './produto/produto.service';
import { LoginModule } from './login/login.module';
import { CategoriaComponent } from './categoria/categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PrincipalComponent,
    CategoriaComponent,
    MarcaComponent,
    ProdutoComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    TableModule,
    ConfirmDialogModule,
    ToastModule,
    DialogModule,
    CalendarModule,
    DropdownModule,
    AutoCompleteModule,
    DataViewModule,
    PanelModule,
    SpinnerModule,
    FileUploadModule,
    TabViewModule,
    LoginModule
  ],
  providers: [
    CategoriaService,
    ConfirmationService,
    MessageService,
    MarcaService,
    ProdutoService,
    LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpClientInterceptor,
      multi: true
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
