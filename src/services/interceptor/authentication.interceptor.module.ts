import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationInterceptor } from './authentication.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    AuthenticationInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },
  ],
})
export class AuthenticationInterceptorModule {}
