import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {RouterModule, Routes} from "@angular/router";
import {ColorDirective} from "../color.directive";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
];

@NgModule({
  declarations: [
    MainComponent,
    ColorDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule, ColorDirective]
})
export class MainModule { }
