import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AuthenticationInterceptorModule } from '../services/interceptor/authentication.interceptor.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './views/home/home.module';

import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationInterceptorModule,
    HomeModule,
    DataTablesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
