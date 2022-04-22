import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { HomeComponent } from './home/home.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { IntroExampleComponent } from './introduction/intro-example/intro-example.component';
import {BasicParagraphComponent} from "./basic/basic-paragraph/basic-paragraph.component";
import {BasicHeadingComponent} from "./basic/basic-heading/basic-heading.component";

const routes: Routes =[
  {
    path:'',
    data: {
      title: 'HTML'
    },
    children: [
      {
        path:'',
        component: HomeComponent
      },
      {
        path: 'introduction',
        component: IntroductionComponent
      },
      {
        path: 'intro-example',
        component: IntroExampleComponent
      },
      {
        path: 'try-yourself/basic-paragraph',
        component: BasicParagraphComponent
      },
      {
        path: 'try-yourself/basic-heading',
        component: BasicHeadingComponent
      },
      {
        path: 'basic',
        component: BasicComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HtmlRoutingModule{}
