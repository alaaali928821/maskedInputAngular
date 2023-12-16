import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Customized-Masked-Input';
  /**
   * 
   * Example of How to use component
   *
   */
  phoneMaskPattern: string = '\[a-zA-Z\]';
  maskIn: string = '000';
  style = {
    'border': '1px solid red',
    'padding': '18px',
    'font-size': '28px'
  };
}
