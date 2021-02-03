import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthenticationInterceptorModule } from '../services/interceptor/authentication.interceptor.module';
import { HomeModule } from './views/home/home.module';
import { DataTablesModule } from 'angular-datatables';
import { LoginModule } from './views/login/login.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthenticationInterceptorModule,
    HomeModule,
    LoginModule,
    DataTablesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
