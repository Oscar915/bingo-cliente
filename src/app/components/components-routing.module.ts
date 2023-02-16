import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCardboardComponent } from './add-cardboard/add-cardboard.component';
import { AddGameComponent } from './add-game/add-game.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { ListCardboardComponent } from './list-cardboard/list-cardboard.component';
import { ListGameComponent } from './list-game/list-game.component';
import { SellComponent } from './sell/sell.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
}, {
  path: 'listuser',
  component: UserListComponent
}, {
  path: 'listcard',
  component: ListCardboardComponent
}, {
  path: 'listgame',
  component: ListGameComponent
}, {
  path: 'addgame',
  component: AddGameComponent
}, {
  path: 'adduser',
  component: AddUserComponent
}, {
  path: 'addcard',
  component: AddCardboardComponent
}, {
  path: 'sell',
  component: SellComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
