import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnrollComponent } from './enroll/enroll.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [	
    AppComponent,
      HomeComponent,
      EnrollComponent
   ],
  imports: [
    BrowserModule,
    MatDialogModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
