import { Component } from '@angular/core';
import { ICONS } from "./ICONS";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public icons = ICONS;
}
