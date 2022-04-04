import { Component, OnInit } from '@angular/core';

import { htmlNavItems } from '../default-layout/sidebarNav/_nav';
import { INavData } from '@coreui/angular';
import { LayoutService } from './layout.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent implements OnInit {

  public navItems: INavData[] = htmlNavItems;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  ngOnInit(): void {
    this.layoutService.headerItem$.subscribe(
      navItems => {
        this.navItems = navItems;
      }
    )
  }
  constructor(private layoutService: LayoutService){
    
  }
}
