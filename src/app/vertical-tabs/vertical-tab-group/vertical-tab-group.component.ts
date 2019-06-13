import { Component, OnInit, ContentChildren, QueryList, AfterViewInit, ViewContainerRef, TemplateRef, ViewChild, AfterContentChecked, ElementRef, AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { Portal, TemplatePortal} from '@angular/cdk/portal';
import { VerticalTabComponent } from '../vertical-tab/vertical-tab.component';

@Component({
  selector: 'app-vertical-tab-group',
  templateUrl: './vertical-tab-group.component.html',
  styleUrls: ['./vertical-tab-group.component.css']
})
export class VerticalTabGroupComponent implements AfterContentInit {

  @ContentChildren(VerticalTabComponent) tabs: QueryList<VerticalTabComponent>;

  selectedIndex = 0;
  selectedClass = '';
  selectedPortal: Portal<any>;

  constructor(
    public elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef,
  ) { }

  ngAfterContentInit(): void {
    this.selectedPortal = new TemplatePortal(this.tabs.toArray()[this.selectedIndex].implicitContent, this.viewContainerRef);
  }

  selectIndex(index: number) {
    this.selectedIndex = index;
    this.selectedPortal = new TemplatePortal(this.tabs.toArray()[this.selectedIndex].implicitContent, this.viewContainerRef);
    this.selectedClass = `selected-${index}`;
  }
}
