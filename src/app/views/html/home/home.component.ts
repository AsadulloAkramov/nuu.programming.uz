import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  basicExampleLink: string = "/html/basic-example"
  prev: string = "/html";
  next: string = "/html/basic";
  constructor() { }

  ngOnInit(): void {
  }

}
