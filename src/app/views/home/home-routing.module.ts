import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersReadComponent } from 'src/app/components/cruds/users/users-read/users-read.component';

import { HomeComponent } from './home.component';
import { UsersCreateComponent } from '../../components/cruds/users/users-create/users-create.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'users', component: UsersReadComponent },
      { path: 'user/:option/:id', component: UsersCreateComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
