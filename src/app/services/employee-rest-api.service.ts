import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeRestApiService {
  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:3000/';

  getAllEmployees(): Observable<Employee[]> {
    const url = `${this.baseUrl}employee`;
    return this.http.get<Employee[]>(url).pipe(
      tap({
        next: (employees: Employee[]) =>
          console.log('fetched employees', employees),
        error: (error) => console.log(error),
      })
    );
  }

  getEmployeeById(id: string): Observable<Employee> {
    const url = `${this.baseUrl}employee/${id}`;
    return this.http.get<Employee>(url).pipe(
      tap({
        next: (employee: Employee) =>
          console.log('fetched employees', employee),
        error: (error) => console.log(error),
      })
    );
  }

  addEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.baseUrl}employee`;
    return this.http.post<Employee>(url, employee).pipe(
      tap({
        next: (employee: Employee) =>
          console.log('fetched employees', employee),
        error: (error) => console.log(error),
      })
    );
  }
}
