import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortalModule } from '@angular/cdk/portal';

import { MaterialModule } from './shared/material.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { VerticalTabGroupComponent } from './vertical-tabs/vertical-tab-group/vertical-tab-group.component';
import { VerticalTabComponent } from './vertical-tabs/vertical-tab/vertical-tab.component';
import { VerticalTabContentDirective } from './vertical-tabs/directives/vertical-tab-content.directive';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule,
    MaterialModule, 
    SharedModule,
    PortalModule
  ],
  declarations: [ 
    AppComponent, 
    VerticalTabGroupComponent, 
    VerticalTabComponent, 
    VerticalTabContentDirective
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
