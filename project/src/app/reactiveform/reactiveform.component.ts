import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
  username:any;
 loginForm = new FormGroup(
  {
     username: new FormControl("",[Validators.required]), 
     password: new FormControl("",[Validators.required,Validators.email])
  }
 ) 

  submitForm()
  {
  console.log(this.loginForm.value);
  this.username = this.loginForm.get('username')?.value
   console.log(this.username);
  }
  
}
