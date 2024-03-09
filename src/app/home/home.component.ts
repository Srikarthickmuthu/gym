import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SigninComponent } from '../auth-module/signin/signin.component';
import { EnrollComponent } from '../enroll/enroll.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private matDialog: MatDialog,
  ) { }

  ngOnInit() {
  }
  openLogin(){
    console.log("click");
    
    this.matDialog.open(SigninComponent).afterClosed().subscribe()
  }
  openEnroll(){
    console.log("enroll");
    this.matDialog.open(EnrollComponent).afterClosed().subscribe()
  }

}
