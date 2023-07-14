import { Component } from '@angular/core';

@Component({
  selector: 'app-money-converter',
  templateUrl: './money-converter.component.html',
  styleUrls: ['./money-converter.component.css']
})
export class MoneyConverterComponent {
  
inr:number=0;
currency:string="USD"
amount:number=0;
convertCurrency() {
if(this.currency == "USD")
{
  this.amount = this.inr / 75;
}
else if(this.currency == "EURO")
{
  this.amount = this.inr / 88
}
else if (this.currency == "POUND")
{
  this.amount = this.inr / 104
}

}
}
