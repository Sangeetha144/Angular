import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
 height!:number;
 weight!:number;
 bmi!:number;
 findBmi(height:string,weight:string)
 {
  this.height = this.converter(height)
  this.weight = this.converter(weight)
  this.bmi = this.weight/(this.height*this.height)
  
 }
 converter(value:string):number{
    return parseFloat(value)
 }

}
