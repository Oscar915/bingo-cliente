import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeAdminComponent } from './theme-admin/theme-admin.component';

const routes: Routes = [
{
  path: '',
  component: ThemeAdminComponent,
  children:[
    {
      path: '',
      loadChildren: () => import('./../components/components.module')
        .then(m => m.ComponentsModule),
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
