import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-overview',
  templateUrl: './employee-overview.component.html',
  styleUrls: ['./employee-overview.component.scss'],
})
export class EmployeeOverviewComponent implements OnInit {
  employees: Employee[] = [];

  constructor(
    /* (09) Inject our Employee service  */
    /* (09) inject router */
  ) { }

  ngOnInit(): void {
    /* (09) get employees from our service */
  }

  showEmployeeDetailsClickHandler(employee: Employee): void {
    /* (09) add routing */
  }
}
