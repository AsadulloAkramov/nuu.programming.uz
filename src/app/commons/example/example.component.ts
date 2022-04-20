import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  @Input() pageLink: string = "/";
  constructor() { }

  ngOnInit(): void {
  }

}
