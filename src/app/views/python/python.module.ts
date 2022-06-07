import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PythonRoutingModule } from './python-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PythonRoutingModule
  ]
})
export class PythonModule { }
