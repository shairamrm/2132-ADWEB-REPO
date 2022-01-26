import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interpolation Demo';
  appName = 'This is a one-way data binding example!';
  nameSection = 'Mallari, Shaira Mella R. (WD-301)'

  //Numeric Binding
  header1 = 'Number Interpolation';
  n1 = 70;
  n2 = 30;
  sum = 0;
  diff = 0;
  quo = 0;
  prod = 0;

  //Property Binding
  clientName:string = "Shaira";

  //Style Binding
  appliedCSSClass = "green";
  notappliedCSSClass = true;
  myColor = 'red';

  //Two-Way Data Binding
  showData($event:any){
    console.log("Button is Clicked!");
  }

  //keyup function
  getData(data:any){
    console.warn(data)
  }
}

