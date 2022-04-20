import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-intro-example',
  templateUrl: './intro-example.component.html',
  styleUrls: ['./intro-example.component.scss']
})
export class IntroExampleComponent implements OnInit {
  @Output() pageLink: string = "/html/intro-example"
  constructor() { }

  ngOnInit(): void {
  }

}
