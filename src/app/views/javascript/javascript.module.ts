import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavaScriptRoutingModule } from './javascript-routing.module';
import { IntroductionComponent } from './introduction/introduction.component';
import { HomeComponent } from './home/home.component';
import { StatementsComponent } from './statements/statements.component';
import { CommonsModule } from '../../commons/commons.module';
import { StatementExampleComponent } from './statements/statement-example/statement-example.component';


@NgModule({
  declarations: [
    IntroductionComponent,
    HomeComponent,
    StatementsComponent,
    StatementExampleComponent
  ],
  imports: [
    CommonModule,
    JavaScriptRoutingModule,
    CommonsModule
  ]
})
export class JavascriptModule { }
