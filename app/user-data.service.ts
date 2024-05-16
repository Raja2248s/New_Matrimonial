import { Injectable } from '@angular/core';
import { UserData } from './user-data';
import { user } from 'rxfire/auth';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  userData : UserData ={
    user: {
      firstName: '',
      lastName: '',
      address: '',
      noOfGuest: 0 ,
      gender: '',
      dateofFunction: '',
      mobileNum: ''
    },
    personal: {
      photograph: '',
      bloodGroup: '',
      age: 0
    },
    family: {
      familyStatus: '',
      familyType: '',
      fatherName: ''
    },
    education: {
      educationLevel: '',
      educationFiled: '',
    },
    userName: '',
    password: '',
    phoneno: 0,
    email: ''

  } 
  constructor() { }
   
  setUserData(userData: UserData){
    this.userData=userData
  }
  
  getUserData(): UserData {
    return this.userData;
  }
}
