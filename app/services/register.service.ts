import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { 
    
  }
  public addUser(user:any){
    return this.http.post("http://localhost:8085/reg",user);
  }
  public addPersonal(user:any){
    return this.http.post("http://localhost:8085/personal",user)
  }
}
