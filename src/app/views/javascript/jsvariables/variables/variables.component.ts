import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent implements OnInit {

  variables: string[] = [ 'var', 'let', 'const' ];
  constructor() { }

  ngOnInit(): void {
  }

}
