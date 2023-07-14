import { Component } from '@angular/core';
import { UserDetails } from '../../model/userdetail.model';
import { StoreAsJsonService } from '../../service/store-as-json.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
 user:UserDetails=new UserDetails()
 
constructor(private storeservice:StoreAsJsonService){}

 submitForm(user:string)
 {

 this.storeservice.storeUser(user).subscribe(
  {
    next:(res:any) =>
    {
      alert("stored successfully");
    },
    error:(err:any)=>
    {
      alert("error occurs in storing");
    }
  }
 )


 }

}

