import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employees';
  myEmployees: any;
  constructor(private myservice:MyserviceService){}
  ngOnInit() {
    this.myEmployees = this.myservice.Employees
  }
}
// Mallari, Shaira Mella R. WD-301