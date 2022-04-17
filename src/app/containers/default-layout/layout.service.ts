import { Injectable } from '@angular/core';
import { INavData } from '@coreui/angular';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private headerItemSource = new Subject<INavData[]>();
  public headerItem$ = this.headerItemSource.asObservable();
  constructor() { }

  OnChangeSidebar(navItems: INavData[]){
    this.headerItemSource.next(navItems);
  }
}
