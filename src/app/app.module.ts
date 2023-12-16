import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputMaskModule } from './input-mask/input-mask.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, InputMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
