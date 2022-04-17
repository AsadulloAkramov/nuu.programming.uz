import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { LayoutService } from '../layout.service';
import { htmlNavItems, cssNavItems, JavaScriptNavItems} from '../sidebarNav/_nav';
@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent  implements OnInit{

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor( private layoutService: LayoutService) {

  }
  ngOnInit(): void {
    
  }
  OnItemChanged(item: string){
    switch (item) {
      case 'html':
        this.layoutService.OnChangeSidebar(htmlNavItems);
        console.log(`${item} clicked`);
        break;
      case 'css':
        this.layoutService.OnChangeSidebar(cssNavItems);
        console.log(`${item} clicked`);
        break;
        case 'javascript':
        this.layoutService.OnChangeSidebar(JavaScriptNavItems);
        console.log(`${item} clicked`);
        break;
      default:
        break;
    }
  }
}
