import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StoreAsJsonService {

  constructor( private http:HttpClient) { }

storeUser(data:any)
{
  return this.http.post("http://localhost:3000/users",data)
}

}
