import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction/introduction.component';

import { CommonsModule } from '../../commons/commons.module'
import { HtmlRoutingModule } from './html-routing.module';
import { HomeComponent } from './home/home.component';
import { BasicComponent } from './basic/basic.component';
import { IntroExampleComponent } from './introduction/intro-example/intro-example.component';
import { BasicParagraphComponent } from './basic/basic-paragraph/basic-paragraph.component';
import { BasicHeadingComponent } from './basic/basic-heading/basic-heading.component';

@NgModule({
  declarations: [
    IntroductionComponent,
    HomeComponent,
    BasicComponent,
    IntroExampleComponent,
    BasicParagraphComponent,
    BasicHeadingComponent
  ],
  imports: [
    CommonModule,
    HtmlRoutingModule,
    CommonsModule
  ]
})
export class HtmlModule { }
