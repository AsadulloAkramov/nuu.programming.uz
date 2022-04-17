import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { HomeComponent } from './home/home.component';
import { IntroductionComponent } from './introduction/introduction.component';

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
