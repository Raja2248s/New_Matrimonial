import { UserData } from './../user-data';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  public userInfo ={
    rid:0,
    firstName: '',
    lastName: '',
    address: '',
    noOfGuest: 0 ,
    gender: '',
    dateofFunction: '',
    mobileNum: ''
  }
   
  public personalInfo ={
    rid: 0,
    bloodGroup: '',
    age: 0,
    photograph: null,
  }

  public familyInfo ={
    rid:0,
    familyStatus:'',
    familyType:'',
    fatherName:'',
  }

  public eduInfo ={
    rid:0,
    educationLevel: '',
    educationFiled: '',

  }
  constructor(private registerService : RegisterService ){}

  ngOnInit(): void {
    const ridString = sessionStorage.getItem('details');
    if(ridString){
      const rid = parseInt(ridString,10);
      console.log("rid " , rid);
      this.fetchUserInfo(rid);
      this.fetchPersonalInfo(rid);
      this.fetchfamilyInfo(rid);
      this.fetcheduInfo(rid);
    }
    
  }

  fetchUserInfo(rid:number):void{
  
      this.registerService.getuserinfo(rid).subscribe(
        (data)=>{
          
          this.userInfo = { ...this.userInfo, ...data };
          
        },
        (error) =>{
          console.log(error);
        }
      )
  }

  fetchPersonalInfo(rid:number){
    
    this.registerService.getpersonalinfo(rid).subscribe(
      (data)=>{
        console.log(data);
        this.personalInfo = { ...this.personalInfo, ...data };
       
      }
    )
  }

  fetchfamilyInfo(rid:number){
    this.registerService.getfamilyinfo(rid).subscribe(
      (data)=>{
        this.familyInfo = { ...this.familyInfo, ...data };
      }
      ,(error)=>{
   console.log(error);
      }
    )
  }

  fetcheduInfo(rid:number){
    this.registerService.geteduinfo(rid).subscribe(
      (data)=>{
        this.eduInfo = { ...this.eduInfo, ...data };
      }
      ,(error)=>{
   console.log(error);
      }
    )
  }

  

}

