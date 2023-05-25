import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  paraValue = '';
  parameter = true;
  flag = true;
  getDetails(flagType: boolean) {
    if (this.parameter == true) {
      this.paraValue = "Hi, I am Prakhar Saraswat";
      this.parameter = false;
    }
    else {
      this.paraValue = '';
      this.parameter = true;
    }
  }
  spanData = "";
  count = 1;
  addDetails(spanData: string) {
    let span = document.getElementById('span');
    let innerSpan = document.createElement('span');
    innerSpan.innerHTML = " " + spanData;
    span?.appendChild(innerSpan);
    if (this.count % 5 == 0) {
      innerSpan.style.backgroundColor = "blue";
    }
    this.count++;
  }
}
