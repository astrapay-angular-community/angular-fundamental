import { Component } from '@angular/core';
import {HttpService} from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example';

  constructor(public service: HttpService) {
  }

  changeHello() {
    this.title = 'hello ' + this.service.getName()
  }
}
