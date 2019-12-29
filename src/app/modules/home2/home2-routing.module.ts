import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home2Component } from './page/home2.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home2',
    pathMatch: 'full'
  },
  {
    path: 'home2',
    component: Home2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Home2RoutingModule {}
