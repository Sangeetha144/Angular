import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent {
  /*username:string =""
  password:string = ""
  submitForm(value:string)
  {
 console.log(value);
 console.log(this.username)
  }*/
   loginForm = new FormGroup(
    {
       firstname:new FormControl("",[Validators.required]),
       passwrd:new FormControl("",[Validators.required])
    }
   )

firstname:any;
  submit()
  {
console.log(this.loginForm.value)
this.firstname=this.loginForm.get('firstname')?.value;
console.log(this.firstname);
  }

}
