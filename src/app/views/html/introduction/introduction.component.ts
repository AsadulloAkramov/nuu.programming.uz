import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  introExampleLink: string = "/html/intro-example"
  prev: string = "/html";
  next: string = "/html/basic";
  
  constructor() { }

  ngOnInit(): void {
  }

}
