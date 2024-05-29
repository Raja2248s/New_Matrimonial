import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from '../user-data';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseURL = 'http://localhost:8086'
  constructor(private http:HttpClient) { 
    
  }
  public addUser(user:any):Observable<any>{
    return this.http.post("http://localhost:8086/reg",user);
  }
  public addUserinfo(user:any):Observable<any>{
    return this.http.post("http://localhost:8086/user",user);
  }
  public addPersonalinfo(formData :FormData):Observable<any>{
    console.log("Inside services of personal")
    return this.http.post("http://localhost:8086/personal",formData);
  }
  public addFamilyinfo(user:any):Observable<any>{
    return this.http.post("http://localhost:8086/family",user);
  }
  public addEducationinfo(user:any):Observable<any>{
    return this.http.post("http://localhost:8086/edu",user);
  }

  public getRegistration():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:8086/reg");
  }
   
  public deleteRegistration(id: number): Observable<any> {
    console.log(`${this.baseURL}/reg/${id}`);
    return this.http.delete(`${this.baseURL}/reg/${id}`);
  }

  public getuserinfo(rid : number):Observable<any>{
  
    return this.http.get<any>(`${this.baseURL}/user/rid/${rid}`)
  }
  public getpersonalinfo(rid : number):Observable<any>{
  
    return this.http.get<any>(`${this.baseURL}/personal/rid/${rid}`)
  }

  public getfamilyinfo(rid : number):Observable<any>{
  
    return this.http.get<any>(`${this.baseURL}/family/rid/${rid}`)
  }
  public geteduinfo(rid : number):Observable<any>{
  
    return this.http.get<any>(`${this.baseURL}/edu/rid/${rid}`)
  }


  

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  public log(email : string){
    // const headers = { 'Content-Type': 'application/json' };
    console.log(`http://localhost:8086/reg/${email}`)
    return this.http.get<UserData>(`http://localhost:8086/reg/${email}` , this.httpOptions)
  }
}
