import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { LayoutService } from '../layout.service';
import { htmlNavItems, cssNavItems, JavaScriptNavItems, PythonNavItems, CsharpNavItems} from '../sidebarNav/_nav';
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
        break;
      case 'css':
        this.layoutService.OnChangeSidebar(cssNavItems);
        break;
      case 'javascript':
        this.layoutService.OnChangeSidebar(JavaScriptNavItems);
        break;
      case 'python':
        this.layoutService.OnChangeSidebar(PythonNavItems);
        break;
      case 'csharp':
        this.layoutService.OnChangeSidebar(CsharpNavItems);
        break;
      default:
        break;
    }
  }
}
