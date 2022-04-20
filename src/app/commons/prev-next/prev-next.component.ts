import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'prev-next',
  templateUrl: './prev-next.component.html',
  styleUrls: ['./prev-next.component.scss']
})
export class PrevNextComponent implements OnInit {
  @Input() prev:string = "/"
  @Input() next:string = "/"

  constructor() { }

  ngOnInit(): void {
  }

}
