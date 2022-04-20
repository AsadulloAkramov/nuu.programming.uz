import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrLineComponent } from './hr-line/hr-line.component';
import { ExampleComponent } from './example/example.component';



@NgModule({
  declarations: [
    HrLineComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HrLineComponent,
    ExampleComponent
  ]
})
export class CommonsModule { }
