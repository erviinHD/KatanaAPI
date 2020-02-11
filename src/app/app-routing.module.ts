import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NotPageComponent } from './not-page/not-page.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { RegistroComponent } from './registro/registro.component';
import { GestionComponent } from './gestion/gestion.component';


const routes: Routes = [
  {
    path: '', component: InicioComponent
  },
  {
    path: 'gestion/:id', component: GestionComponent
  },
  {
    path: 'consulta', component: ConsultaComponent
  },
  {
    path: 'ingreso', component: RegistroComponent
  },
  {
    path: '**', component: NotPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
