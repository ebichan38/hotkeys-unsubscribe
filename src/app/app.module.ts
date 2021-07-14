import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { NoUnsubscribeComponent } from './no-unsubscribe/no-unsubscribe.component';
import { HotkeysModule } from '@ngneat/hotkeys';

@NgModule({
  declarations: [
    AppComponent,
    UnsubscribeComponent,
    NoUnsubscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [HotkeysModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
