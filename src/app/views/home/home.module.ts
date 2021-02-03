import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { MenuComponent } from '../../components/templates/menu/menu.component';
import { UsersReadComponent } from 'src/app/components/cruds/users/users-read/users-read.component';
import { UsersCreateComponent } from '../../components/cruds/users/users-create/users-create.component';
import { FooterComponent } from '../../components/templates/footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    UsersReadComponent,
    UsersCreateComponent,
    FooterComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
