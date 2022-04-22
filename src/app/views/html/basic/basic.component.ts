import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  introExampleLink: string = "/html/intro-example";
  constructor() { }

  ngOnInit(): void {
  }

}
