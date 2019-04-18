import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Ng7ProductZoomModule} from 'ng7-product-zoom';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng7ProductZoomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
