import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import { ColorDirective } from './color.directive';
import { Color2Directive } from './color2.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColorDirective,
    Color2Directive,
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
