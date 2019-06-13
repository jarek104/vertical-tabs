import { Component, OnInit, Input, ContentChild, TemplateRef, ViewContainerRef, ViewChild, AfterContentInit } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { VerticalTabContentDirective } from '../directives/vertical-tab-content.directive';

@Component({
  selector: 'app-vertical-tab',
  templateUrl: './vertical-tab.component.html',
  styleUrls: ['./vertical-tab.component.css']
})
export class VerticalTabComponent implements OnInit, AfterContentInit {
  @Input() label = '';

  @ContentChild(VerticalTabContentDirective, { read: TemplateRef, static: false})
  implicitContent: TemplateRef<VerticalTabContentDirective>;

  templatePortal: TemplatePortal | null = null;

  constructor(
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.implicitContent);
  }
}
