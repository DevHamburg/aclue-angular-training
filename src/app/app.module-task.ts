import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* (8) import the HttpClientModule */
import { ReactiveFormsModule } from '@angular/forms';

// Components & Pages
import { NavigationComponent } from './components/navigation/navigation.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { EmployeeOverviewComponent } from './pages/employee-overview/employee-overview.component';
import { EmployeeDetailsComponent } from './pages/employee-details/employee-details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

// Angular Material Design
/* (6) Add the Angular material imports here */

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AddEmployeeComponent,
    EmployeeOverviewComponent,
    PageNotFoundComponent,
    EmployeeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    /* (8) Import HttpClientModule */
    ReactiveFormsModule,

    /* (6) Import the modules here */
    // Angular material modules
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
