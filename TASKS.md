# Tasks

<br>

## 1. Create and run a Angular application.

---

<br>

### Install the Angular CLI

---

To install the Angular CLI, open a terminal window and run the following command:

```
npm install -g @angular/cli
```

<br>

### Create a workspace and initial application

---

Run the CLI command ng new and provide the name my-app, as shown here:

```
ng new my-app
```

Info: <br>

- use Routing
- use scss
  <br>

### Run the Application

---

1. Navigate to the workspace folder, such as my-app.
2. Run the following command:

```
cd my-app
ng serve --open
```

Info: the Application is now running on Port 4200 (http://localhost:4200)
<br>
<br>

## 2. Use the Angular cli to create components and services.

---

<br>

1.  Create the following components into a <b>pages</b> folder:
    <br>
    <b>add-employee | employee-details | employee-overview | page-not-found</b>

Example:

```
ng g c pages/add-employee
```

Explaination:
<b> ng (g = generate) - (c = component) - (components = folder) - (add-employee = name) </b>

2. Create a the following component into a <b>components</b> folder:
   <br>
   <b>navigation</b>

```
ng g c components/navigation
```

3. Create a service into a <b>services</b> folder:

```
ng g s services/employee-rest-api-service
```

Explaination:
<b> ng (g = generate) - (s = service) - (components = folder) - (add-employee = name) </b>

4. Create a <b>models</b> folder inside the app directory

<br>

## 3. Install all required packages

---

<br>

- Json server to fake a rest api

```
npm i json-server
```

- Angular material is a component library

```
ng add@angular/material
```

- UUID to create unique identifier

```
npm i @types/uuid
```

<br>

## 4. Add routing

---

<br>

1. open file app-routing.module.ts

- inside: `const routes: Routes = []`
- add the missing routes
  <br>
  <b>employee-detail, add-employee</b>
  <br>
  info: extend the "employee-detail" with <b>/:id</b> at the end inside the quotes

<br>

## 5. Add routing to our components

---

<br>

1. open <b>navigation.component.html</b> and add links.
   Example:

```
<a routerLink="/example" ariaCurrentWhenActive="page">
    <mat-icon routerLinkActive="active" aria-label="Arrow Back Icon"
      >group</mat-icon
    ><span routerLinkActive="active">Mitarbeiter Übersicht</span></a
  >
```

<b>info:</b> "/example" include the names that we have defined in our <b>app-routing.modul</b> file.

Explaination:

- <b> routerLink </b> write the path where the anchor should link
- <b> routerLinkActive="active" </b> adds a active class to anchor when you are on the page

<br>

2. open <b>app.component.html</b> and add the tag <b>`<router-outlet></router-outlet>`</b>

<br>

3. add <b>`<app-navigation></app-navigation>`</b> tag above the <b>router-outlet</b> tag

<br>

## 6. Add Angular material modules

<br>

Add all material Modules into <b>app.module.ts</b> file.

```
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
```

<br>

```
MatToolbarModule
MatCardModule
MatFormFieldModule
MatIconModule
MatButtonModule
MatInputModule
MatChipsModule
```

<br>

## 7. Start Json server and create a Employee model

---

<br>

1. Start json server

   open terminal:

   - cd into <b>src/assets/db</b> and run:

   ```
   json-server --watch db.json
   ```

2. Look at the Object below:

```
{
      "id": "6fe42446-e6da-11ec-8fea-0242ac120002",
      "firstName": "Marius",
      "lastName": "Hensch",
      "imageUrl": "./assets/images/marius-hensch.jpg",
      "level": "CEO",
      "projectExperience": 5,
      "skills": [
        "Smart",
        "Reden",
        "Lächeln",
        "Vertrieb",
        "Feiern"
      ]
    },
```

3. create a <b>employee.model.ts</b> file into <b> models</b> folder and define a Model and name it Employee

Exmaple:

```
export class ModelName {
  id?: string;
  name!: string;
  age!: number;
  hobbys!: string[];
}
```

Explaination: <br>
What means the <b>!</b> attribute

- non-null assertion
- The exclamation mark (non-null assertion) operator removes null and undefined from the type of an expression. It is used when we we know that a variable that TypeScript thinks could be null or undefined actually isn't.

What means the <b>?</b> attribute

- that the value is nullable

<br>

## 8. Creat http requests and import http module

---

<br>

1. import the http module in app.modules.ts

```
import { HttpClientModule } from '@angular/common/http';

HttpClientModule
```

2. import Employee model in <b>employee-rest-api.service.ts</b>

3. create a http get request to get all employees and name it <b> getAllEmployees() </b>

Example:

```
getAllExample(): Observable<Example[]> {
    const url = `${this.baseUrl}example`;
    return this.http.get<any>(url).pipe(
      tap({
        next: (example: Example[]) =>
          console.log('fetched employees', employees),
        error: (error) => console.log(error),
      })
    );
  }
```

4. create a http get request to get a employee by id and name it <b> getEmployeeById() </b>

```
getbyIdExample(id: string)
const url = `${this.baseUrl}example/${id}`;
```

5. create a http post request to add a employee and name it <b> addEmployee()</b>

- you have to pass the employee as parameter addEmploye(employee: Type)
- <b>this.http.post(url, data)</b>

```
addExample(example: Example): Observable<Exmaple> {
    const url = `${this.baseUrl}example`;
    return this.http.post<any>(url, example).pipe(
      tap({
        next: (example: Example) =>
          console.log('fetched examples', example),
        error: (error) => console.log(error),
      })
    );
  }
```

Explanations: <br>
<b>Observable</b>

- A handler for receiving observable notifications implements the Observer interface. It is an object that defines callback methods to handle the three types of notifications that an observable can send:

<b> There are two types of pipe </b>

1. Pipes in Angular: A pipe takes data as input and converts it into the desired output
   https://angular.io/guide/pipes

<br>

2. pipe()-Funktion in RxJS:

- You can use pipes to link operators together. Pipes allow you to combine multiple functions into a single function.
- The pipe() function takes the functions to be combined as arguments and returns a new function which, when executed, executes the combined functions in sequence.

- recommended to use since RxJs 5.5. https://rxjs.dev/api/index/function/pipe

<br>

<b> tap </b>

- Used to perform side-effects for notifications from the source observable

<br>

## 9. Build the employee overview page

---

<br>

1. Inject our Employee service in our component
   Example:

```
constructor(
    private employeeRestApiService: EmployeeRestApiService,
  ) {}
```

2. write a Function inside the OnInit() function to get employees from our employee-rest-api-service

Info: <b> OnInit() </b> is A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.

Example:

```
this.serviceName
      .getAllEmployees()
      .subscribe((data: Model[]): void => {
        console.log(data);
        this.employees = employees;
});
```

3. Customize template employee-overview.component.html

- loop trough the employees inside the template
- add the showEmployeeDetailsClickHandler() function and pass the employee

<br />

<b>Info:</b> {{ value }} Interpolation refers to embedding expressions into marked up text. By default, interpolation uses the double curly braces {{ and }} as delimiters

<br />
- add lastName inside the mat-card-subtitle tag
- add the image src inside the img tag

  <br>

4. Routing to employee-detail component

- inject angular router

Example:

```
private router: Router
```

- add routing in our showEmployeeDetailsClickHandler function

Exmaple:

```
this.router.navigate(['/route-name/', employee.id]);
```

<br>

## 10. Build the employee details page

---

<br>

1. inject activeRoute and employeeRestApiService in the constructor function

```
public employeeRestApiService: EmployeeRestApiService,
    private route: ActivatedRoute
```

2. get the id from the route

- pass this code inside the OnInit method

```
const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getEmployee(id);
    }
```

3. create a method (getEmployee) to get employee by id and pass the following code

```
this.employeeRestApiService.getEmployeeById(id).subscribe({
      next: (employee: Employee) => {
        this.employee = employee;
        this.employeeNotExist = false;
      },
      error: (err) => {
        console.log(err);
        this.employeeNotExist = true;
      },
```

4. add the employee object values inside the template

- employee.lastName
- employee.firstName
- employee.level
- employee.projectExperience

5. loop trough the skills and pass the values inside the template

Eample:

```
*ngFor="let skill of employee.skills"
```

<br>

## 11. Build the add employee page

---

<br>

1. Add lastName and imageUrl to FormControl

  - pass a empty string and Validators.required

2. get lastName and imageUrl from FormControl

3. create a onAddEmployeeSubmit() method in the add-employee component

<br/>

Example:

```
onAddEmployeeSubmit() {
    const employee: Employee = {
      id: uuid.v4(),
      imageUrl: `assets/images/${this.imageUrl.value}.jpg`,
      level: this.level.value,
      projectExperience: this.projectExperience.value,
      skills: this.skills,
    };
  }
```

4. extend the employee Object inside the onAddEmployeeSubmit() method with

```
 firstName: this.firstName.value,
 lastName: this.lastName.value,
```

5. extend the onAddEmployeeSubmit() method with the addEmployee() method from our <b>employee-rest-api.service.ts </b> and pass the employee as parameter.

Example: 
```
this.employeeRestApiService.addEmployee(employee).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: () => {
        console.error('Fehler beim Hinzufügen des Mitarbeiters');
      },
    });
```
<br>

<b> now go into the template add-employee.component.html </b>

6. add [formGroup] and (ngSubmit) inside the `<form>` tag

7. add "onAddEmployeeSubmit()" method to (ngSubmit) and addEmployeeForm to the [formGroup]


Example: 
```
<form
    (ngSubmit)="onAddEmployeeSubmit()"
    [formGroup]="addEmployeeForm"
>
```

<br/>

8. add formControlName="lastName" to the LastName input 

9. add formControlName="imageUrl" to the ImageUrl input

<br/>

## CONGRATULATIONS 

### WE ARE DONE NOW YOU GOT THE ANGULAR BASICS!!! 

:clap: :clap: :clap: