import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction/introduction.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    IntroductionComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class JavascriptModule { }
