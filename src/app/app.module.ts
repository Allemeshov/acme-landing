import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
          { path: '', loadChildren: () => import('./modules/mega-form/landing.module').then(mf => mf.LandingModule) },
        ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
