import { EmployeeRestApiService } from './../../services/employee-rest-api.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-overview',
  templateUrl: './employee-overview.component.html',
  styleUrls: ['./employee-overview.component.scss'],
})
export class EmployeeOverviewComponent implements OnInit {
  employees: Employee[] = [];

  constructor(
    private employeeRestApiService: EmployeeRestApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.employeeRestApiService
      .getAllEmployees()
      .subscribe((employees: Employee[]): void => {
        console.log(employees);
        this.employees = employees;
      });
  }

  showEmployeeDetailsClickHandler(employee: any): void {
    this.router.navigate(['/employee-detail/', employee.id]);
  }
}
