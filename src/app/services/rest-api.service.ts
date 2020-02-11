import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Camisetas } from '../model/camisetas';
import {retry, catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  [x: string]: any;

  apiURL = 'http://localhost:8080/katana_projectWeb/rest/katana';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // HttpClient API get() method => Fetch empleados list
getCamisetas(): Observable<Camisetas> {
  return this.http.get<Camisetas>(this.apiURL + '/camiseta')
  .pipe(
  retry(1),
  catchError(this.handleError)
  )
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
    } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
    }

    // HttpClient API delete() method => Delete empleado
deleteCamiseta(id) {
  return this.http.delete<Camisetas>(this.apiURL + '/camiseta/' + id, this.httpOptions)
  .pipe(
  retry(1),
  catchError(this.handleError)
  )
  }

  // HttpClient API post() method => Crear empleado
createCamiseta(camiseta): Observable<Camisetas> {
  return this.http.post<Camisetas>(this.apiURL + '/camiseta', JSON.stringify(camiseta), this.httpOptions)
  .pipe(
  retry(1),
  catchError(this.handleError)
  )
  }


  // HttpClient API get() method => Consulta un empleado
getCamiseta(id): Observable<Camisetas> {
  return this.http.get<Camisetas>(this.apiURL + '/camiseta/' + id)
  .pipe(
  retry(1),
  catchError(this.handleError)
  )
  }

  // HttpClient API put() method => Actualiza un empleado
updateCamiseta(id, camiseta): Observable<Camisetas> {
  return this.http.put<Camisetas>(this.apiURL + '/camiseta/' + id, JSON.stringify(camiseta),
  this.httpOptions)
  .pipe(
  retry(1),
  catchError(this.handleError)
  )
  }

  
}
