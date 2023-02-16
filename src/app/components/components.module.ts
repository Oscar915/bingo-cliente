import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from '../shared/menu/menu.component';
import { SharedModule } from '../shared/shared.module';
import { UserListComponent } from './user-list/user-list.component';
import { SellComponent } from './sell/sell.component';
import { AddCardboardComponent } from './add-cardboard/add-cardboard.component';
import { AddGameComponent } from './add-game/add-game.component';
import { ListCardboardComponent } from './list-cardboard/list-cardboard.component';
import { ListGameComponent } from './list-game/list-game.component';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  declarations: [
    HomeComponent,
    UserListComponent,
    SellComponent,
    AddCardboardComponent,
    AddGameComponent,
    ListCardboardComponent,
    ListGameComponent,
    AddUserComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule
  ]
})
export class ComponentsModule { }
