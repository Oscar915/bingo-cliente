import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { CoreRoutingModule } from './core-routing.module';
import { ThemeAdminComponent } from './theme-admin/theme-admin.component';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ThemeAdminComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ComponentsModule,
    SharedModule, 
    HttpClientModule
  ]
})
export class CoreModule { }
