import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'html-base',
  templateUrl: './html-base.component.html',
  styleUrls: ['./html-base.component.scss']
})
export class HtmlBaseComponent implements OnInit {
  @Input() isHeadVisible: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
