import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarService, SharedService, SettingsService } from './services.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SidebarService, SharedService, SettingsService
  ]
})
export class ServiceModule { }
