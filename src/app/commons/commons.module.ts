import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HrLineComponent } from './hr-line/hr-line.component';
import { ExampleComponent } from './example/example.component';
import { PrevNextComponent } from './prev-next/prev-next.component';
import { HtmlBaseComponent } from './html-base/html-base.component';



@NgModule({
  declarations: [
    HrLineComponent,
    ExampleComponent,
    PrevNextComponent,
    HtmlBaseComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HrLineComponent,
    ExampleComponent,
    PrevNextComponent,
    HtmlBaseComponent
  ]
})
export class CommonsModule { }
