import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  /*  meter to centimeter */
  centimeter!: number;
 meter!:number
 
 
   
  converter(meter: string)
  {
    let newMeter = this.convertToNumber(meter);
 
  this.centimeter = newMeter * 100;
  //alert(this.conv.value)
 }
 convertToNumber(value: string): number {
  return parseFloat(value);
}

// end meter to centimeter
// hour to minutes
// end hour to minutes


    name!: string;
    age!: number;
    new:any;
  
    submitForm() {
      // Form submission logic
     // console.log('Name:', this.name);
      //console.log('Age:', this.age);
        this. new= this.age * 100
      // Additional logic for saving or processing the form data
    }
 

  handleKeyUp(event: KeyboardEvent) {
    console.log('Key Released:', event.key);
    console.log('Key Code:', event.keyCode);
    console.log('Key Code (Deprecated):', event.which);
    console.log('Key Location:', event.location);
    console.log('Key Code Name:', event.code);
    console.log('Shift Key Pressed:', event.shiftKey);
    console.log('Ctrl Key Pressed:', event.ctrlKey);
    console.log('Alt Key Pressed:', event.altKey);
    console.log('Meta Key Pressed:', event.metaKey);
    console.log('Target Element:', event.target);
    
    // Prevent default behavior for specific keys
    if (event.key === 'Enter') {
      event.preventDefault();
      console.log('Enter key prevented default behavior');
    }
    
    // Perform other actions based on the key released
  }


  
  
}
