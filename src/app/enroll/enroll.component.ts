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
  public signInForm!: FormGroup;
  public id: Array<any> = [];
  user: any;
  public daysLeft: Number = 1;
  public show: boolean = false;
  public courses :Array<any> = [];
  @ViewChild('googleButton') googleButton: any;
  constructor(
    private formbuilder: FormBuilder,
    public router: Router,
    private matDialog:MatDialog
    ) {}

  ngOnInit() {
    this.courses=['jiji','kiki','lili']
    this.signInForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.maxLength(10)]],
      name: ['', [Validators.required, Validators.name]],
      gender: ['', [Validators.required, Validators.name]],
      course: ['', [Validators.required, Validators.email]],
      fees: ['', [Validators.required, Validators.email]],
    });
  }
  public enroll() {
    if (this.signInForm.invalid) {
      this.signInForm.markAllAsTouched();
      return;
    }
    else{
      console.log(this.signInForm.value);
    }
  }
}
