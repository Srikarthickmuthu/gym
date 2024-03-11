import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent {
  public enrollForm!: FormGroup;
  public id: Array<any> = [];
  user: any;
  public daysLeft: Number = 1;
  public show: boolean = false;
  public courses :Array<any> = [];
  @ViewChild('googleButton') googleButton: any;
  constructor(
    private formbuilder: FormBuilder,
    public router: Router,
    private matDialog:MatDialog,
    ) {}

  ngOnInit() {
    this.courses=['Select a course','Body Building','Cross Fit','Gymnastic','Fitness','Cardio','Boxing']
    this.enrollForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.maxLength(10)]],
      name: ['', [Validators.required]],
      course: ['', [Validators.required]],
    });
  }
  public enroll() {
    console.log("Vanta");
    
    if (this.enrollForm.invalid) {
      this.enrollForm.markAllAsTouched();
      return;
    }
    else{
      console.log(this.enrollForm.value);
    }
  }
}
