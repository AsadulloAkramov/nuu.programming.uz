import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { IntroductionComponent } from './introduction/introduction.component';

const routes: Routes =[
  {
    path:'',
    data: {
      title: 'JavaScript'
    },
    children: [
      {
        path:'',
        component: HomeComponent
      },
      {
        path: 'introduction',
        component: IntroductionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JavaScriptRoutingModule{}
