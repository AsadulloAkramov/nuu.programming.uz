import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction/introduction.component';

import { CommonsModule } from '../../commons/commons.module'
import { HtmlRoutingModule } from './html-routing.module';
import { HomeComponent } from './home/home.component';
import { BasicComponent } from './basic/basic.component';

@NgModule({
  declarations: [
    IntroductionComponent,
    HomeComponent,
    BasicComponent
  ],
  imports: [
    CommonModule,
    HtmlRoutingModule,
    CommonsModule
  ]
})
export class HtmlModule { }
