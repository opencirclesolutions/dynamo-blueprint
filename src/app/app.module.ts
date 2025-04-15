import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MessageService} from 'primeng/api';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {registerLocaleData} from '@angular/common';
import localeNl from '@angular/common/locales/nl';
import localeEn from '@angular/common/locales/en';
import {AppConfigService} from "./service/app-config.service";
import {provideOAuthClient} from "angular-oauth2-oidc";

registerLocaleData(localeNl);
registerLocaleData(localeEn);

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    }),
  ],
  providers: [
    provideOAuthClient(),
    provideHttpClient(withInterceptorsFromDi()),
    MessageService,
    //{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {provide: LOCALE_ID, useValue: 'en'},
    {provide: 'DYNAMO_CONFIG', useClass: AppConfigService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
