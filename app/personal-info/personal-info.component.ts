import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent implements OnInit {

  age: number=0;
  bloodGroup: string='';
  photo: File|null = null;

  public user ={
    bloodGroup:'',
    age:0,
    photo:null
  }

  constructor(private http: HttpClient , private router:Router){}
ngOnInit(): void {
  throw new Error('Method not implemented.');
}
formSubmit() {
  throw new Error('Method not implemented.');
  }

  register(){
    
  }

}
