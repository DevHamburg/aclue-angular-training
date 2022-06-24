/* (8) import the Httpmodule -  from '@angular/common/http'*/
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
/* (8) import the Employee model */

@Injectable({
  providedIn: 'root',
})
export class EmployeeRestApiService {
  constructor(/* private http: HttpClient */) {}

  baseUrl = 'http://localhost:3000/';
}
