import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  introExampleLink: string = "/html/intro-example";
  basicParagraphExample: string = "/html/try-yourself/basic-paragraph";
  basicHeadingExample: string = "/html/try-yourself/basic-heading";
  prev: string = "/html";
  next: string = "/html/basic";
  constructor() { }

  ngOnInit(): void {
  }

}
