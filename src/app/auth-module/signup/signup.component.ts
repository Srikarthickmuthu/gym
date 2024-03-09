import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
// import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private formBuilders: FormBuilder,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilders.group({
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.maxLength(10)]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/
          ),
        ],
      ],
    });
  }

  OnSubmit() {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }
    else{
      console.log(this.signupForm.value);
    }
  }
}
