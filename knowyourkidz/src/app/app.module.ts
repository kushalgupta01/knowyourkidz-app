import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZoomIntegrationComponent } from './zoom-integration/zoom-integration.component';
import { ZoomComponent } from './zoom/zoom.component';
@NgModule({
  declarations: [
    AppComponent,
    ZoomIntegrationComponent,
    ZoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
