import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { NotPageComponent } from './not-page/not-page.component';

import { HttpClientModule } from '@angular/common/http';
import { GestionComponent } from './gestion/gestion.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistroComponent,
    ConsultaComponent,
    NotPageComponent,
    GestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
