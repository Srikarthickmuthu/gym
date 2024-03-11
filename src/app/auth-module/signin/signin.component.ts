import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  public signInForm!: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    public router: Router,
    private matDialog:MatDialog
  ) {}

  ngOnInit() {
    this.signInForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          // Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+'),
        ],
      ],
    });
  }
  public openSignup(){
    this.matDialog.closeAll()
    this.matDialog.open(SignupComponent).afterClosed().subscribe()
  }
  public login() {
    console.log("vantaa");
    
    if (this.signInForm.invalid) {
      this.signInForm.markAllAsTouched();
      return;
    }
    else{
      console.log(this.signInForm.value);
    }
  }
}
