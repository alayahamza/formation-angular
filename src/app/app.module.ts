import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {OrderModule} from './order/order.module';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OrderModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'},
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
