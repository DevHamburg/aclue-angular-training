import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { EmployeeRestApiService } from 'src/app/services/employee-rest-api.service';
import { Employee } from 'src/app/models/employee.model';
import * as uuid from 'uuid';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  constructor(private employeeRestApiService: EmployeeRestApiService) { }

  addEmployeeForm!: FormGroup;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  skills: string[] = [];
  addOnBlur = true;

  ngOnInit(): void {
    this.addEmployeeForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      imageUrl: new FormControl('', [Validators.required]),
      level: new FormControl('', [Validators.required]),
      projectExperience: new FormControl('', [Validators.required]),
    });
  }

  get firstName() {
    return this.addEmployeeForm.get('firstName')!;
  }

  get lastName() {
    return this.addEmployeeForm.get('lastName')!;
  }

  get imageUrl() {
    return this.addEmployeeForm.get('imageUrl')!;
  }
  get level() {
    return this.addEmployeeForm.get('level')!;
  }
  get projectExperience() {
    return this.addEmployeeForm.get('projectExperience')!;
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.skills.push(value);
    }
    event.chipInput!.clear();
  }

  remove(skill: string): void {
    const index = this.skills.indexOf(skill);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

  onAddEmployeeSubmit() {
    const employee: Employee = {
      id: uuid.v4(),
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      imageUrl: `assets/images/${this.imageUrl.value}.jpg`,
      level: this.level.value,
      projectExperience: this.projectExperience.value,
      skills: this.skills,
    };

    this.employeeRestApiService.addEmployee(employee).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: () => {
        console.error('Fehler beim Hinzufügen des Mitarbeiters');
      },
    });
  }



  /* (11) create a onAddEmployeeSubmit() method */
  /* (11) extend the employee Object */
  /* (11) extend the onAddEmployeeSubmit() method with the addEmployee() method from our employee-rest-api.service.ts */
}
