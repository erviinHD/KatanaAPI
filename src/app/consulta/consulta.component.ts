import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  camisetas: any = [];

  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.consultarCamisetas()
  }

  consultarCamisetas() {
    return this.restApi.getCamisetas().subscribe((data: {}) => {
      this.camisetas = data;
    })
  }

  // Borrar un empleado
eliminarCamiseta(id) {
  if (window.confirm('Está seguro que desea eliminar el dato?')){
  this.restApi.deleteCamiseta(id).subscribe(data => {
  this.consultarCamisetas()
  })
  }
  }

}
