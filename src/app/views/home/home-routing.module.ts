import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersReadComponent } from 'src/app/components/cruds/users/users-read/users-read.component';

import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: UsersReadComponent },
      { path: 'user-create', component: UsersReadComponent },
      { path: 'user-edit', component: UsersReadComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
