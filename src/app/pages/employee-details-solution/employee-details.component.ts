import { Employee } from '../../models/employee.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeRestApiService } from 'src/app/services/employee-rest-api.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent implements OnInit {
  constructor(
     /* (10) Inject inject activeRoute and employeeRestApiService  */
  ) { }

  employee!: Employee;
  employeeNotExist: boolean = false;

  ngOnInit(): void {
    /* (10)  get the id from the route */
  }

 /* create a method (getEmployee)  */
 
}


