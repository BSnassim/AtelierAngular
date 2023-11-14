import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-user-reactive',
  templateUrl: './form-user-reactive.component.html',
  styleUrls: ['./form-user-reactive.component.css']
})
export class FormUserReactiveComponent implements OnInit {
username:FormControl = new FormControl("",[Validators.required,Validators.minLength(3)]);

userForm = new FormGroup( {
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  password: new FormControl(''),
  birthDate: new FormControl(''),
  email: new FormControl(''),
  address: new FormGroup( {city:new FormControl(''), street:new FormControl('')} ),
  competences : new FormArray( [new FormControl('')] )
})
  constructor() { }

  ngOnInit(): void {
    console.log(this.userForm.controls)
  }

  get competences(){
    return this.userForm.controls["competences"] as FormArray;
  }

  addCompetence(){
    this.competences.push(new FormControl(''));
  }

  testAdd(){
    this.username.value;
  }

}
