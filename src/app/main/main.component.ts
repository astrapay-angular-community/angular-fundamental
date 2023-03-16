import { Component } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  plainText: string = '-'
  constructor(private httpService: HttpService) {
  }

  setPlainText() {
    this.plainText = this.httpService.greeting()
  }
}
