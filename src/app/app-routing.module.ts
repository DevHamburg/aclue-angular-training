import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './pages/employee-details/employee-details.component';
import { EmployeeOverviewComponent } from './pages/employee-overview/employee-overview.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'employee-overview', component: EmployeeOverviewComponent },
  { path: 'employee-detail/:id', component: EmployeeDetailsComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: '', redirectTo: '/employee-overview', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
