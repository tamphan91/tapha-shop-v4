import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthGuard } from '@app/guard/auth.guard';
import { NoAuthGuard } from '@app/guard/no-auth.guard';
import { throwIfAlreadyLoaded } from '@app/guard/module-import.guard';

import { TokenInterceptor } from '@app/interceptor/token.interceptor';

import { NgxSpinnerModule } from 'ngx-spinner';
import { LoaderInterceptor } from './interceptor/loader.interceptor';

@NgModule({
  imports: [
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [
    AuthGuard,
    NoAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
