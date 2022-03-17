import { Component, OnInit, ContentChild, QueryList, Input } from '@angular/core';

@Component({
  //selector: 'app-tab',
  //styleUrls: ['./tab.component.scss'],
  selector: 'tabs',
  template: `
  <div>
    <ng-content></ng-content>
  </div>
  `
})
export class TabComponent implements OnInit {

  @Input() tabTitle: any;

  constructor() { }

  ngOnInit(): void {
  }

}
