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
    private employeeRestApiService: EmployeeRestApiService,
    private route: ActivatedRoute
  ) { }

  employee!: Employee;
  employeeNotExist: boolean = false;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    if (id) {
      this.getEmployee(id);
    }
  }

  private getEmployee(id: string) {
    this.employeeRestApiService.getEmployeeById(id).subscribe({
      next: (employee: Employee) => {
        this.employee = employee;
        this.employeeNotExist = false;
      },
      error: (err) => {
        console.log(err);
        this.employeeNotExist = true;
      },
    });
  }
}


