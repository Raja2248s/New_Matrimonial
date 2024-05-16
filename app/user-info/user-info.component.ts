import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { Registration } from '../interfaces/auth';
import { error } from 'console';
import { UserDataService } from '../user-data.service';
@Component({
  selector: 'app-user-info',
  
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})

export class UserInfoComponent implements OnInit{
 
  ngOnInit(): void {} 

    firstName: string='';
    lastName: string='';
    address: string='';
    noOfGuest: number=0;
    gender: string='';
    dateofFunction: string='';
    mobileNum: string='';
      
    public user ={
      firstName: '',
      lastName: '',
      address: '',
      noOfGuest: 0 ,
      gender: '',
      dateofFunction: '',
      mobileNum: ''
    }

    constructor(private http: HttpClient , private router:Router , private registerService : RegisterService , private userDataService : UserDataService){}

    formsubmit(){
      const userData = this.userDataService.getUserData();
      userData.user = this.user
      console.log(userData);
      this.router.navigate(['personal_info'])

    }
}
