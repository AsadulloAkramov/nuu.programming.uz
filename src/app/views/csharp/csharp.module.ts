import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CsharpRoutingModule } from './csharp-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CsharpRoutingModule
  ]
})
export class CsharpModule { }
