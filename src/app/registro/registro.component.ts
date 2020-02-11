import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  @Input() camisetaDetalles = { precio: '', imagen: '', imagen2: '', imagen3: '' }

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  addShirt(dataCamiseta) {
    this.restApi.createCamiseta(this.camisetaDetalles).subscribe((data: {}) => {
    this.router.navigate(['consulta'])
    })}

}
