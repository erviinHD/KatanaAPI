import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {
  idCamiseta = this.actRoute.snapshot.params['id'];
  camisetaData: any = {};
  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.restApi.getCamiseta(this.idCamiseta).subscribe((data: {}) => {
      this.camisetaData = data;
    })
  }

  updateShirt() {
    if (window.confirm('Esta seguro que desea actualizar?')) {
      this.restApi.updateCamiseta(this.idCamiseta, this.camisetaData).subscribe(data => {
        this.router.navigate(['consulta'])
      })
    }
  }

}
