import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { CardboardComponent } from './cardboard/cardboard.component';

const COMPONENTS = [
  MenuComponent,
  HeaderComponent,
  FooterComponent,
  NavComponent,
  CardboardComponent
];

@NgModule({
  declarations: [
    COMPONENTS,
    CardboardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CommonModule,COMPONENTS
  ]
})
export class SharedModule { }
