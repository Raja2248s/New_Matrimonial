import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from '../user-data';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseURL = 'http://localhost:8080'
  constructor(private http:HttpClient) { 
    
  }
  public addUser(user:any):Observable<any>{
    return this.http.post("http://localhost:8086/reg",user);
  }
  public addUserinfo(user:any):Observable<any>{
    return this.http.post("http://localhost:8086/user",user);
  }
  public addPersonalinfo(user:any):Observable<any>{
    return this.http.post("http://localhost:8086/personal",user);
  }
  public addFamilyinfo(user:any):Observable<any>{
    return this.http.post("http://localhost:8086/family",user);
  }
  public addEducationinfo(user:any):Observable<any>{
    return this.http.post("http://localhost:8086/edu",user);
  }

  // public addPersonal(user:any){
  //   return this.http.post("http://localhost:8085/personal",user)
  // }
  // public findregister(email : string){
  //   return this.http.get(`http://localhost:8085/reg/${email}`)
  // }

  // public addfamily(user:any){
  //   return this.http.post("http://localhost:8085/family",user)
  // }
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  public log(email : string){
    // const headers = { 'Content-Type': 'application/json' };
    console.log(`http://localhost:8085/reg/${email}`)
    return this.http.get<UserData>(`http://localhost:8085/reg/${email}` , this.httpOptions)
  }
}
