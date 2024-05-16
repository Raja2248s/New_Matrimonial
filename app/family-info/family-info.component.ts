import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { UserDataService } from '../user-data.service';
import { PersonalInfoComponent } from '../personal-info/personal-info.component';

@Component({
  selector: 'app-family-info',
  templateUrl: './family-info.component.html',
  styleUrl: './family-info.component.css'
})
export class FamilyInfoComponent implements OnInit {

  familyStatus: string='';
  familyType : string='';
  fatherName : string=''

  public user ={
    familyStatus:'',
    familyType:'',
    fatherName:'',
    // registration:{
    //   userName:'',
    //   email:'',
    //   password:'',
    //   phoneno:'',
    // }
  }
  constructor(private http : HttpClient , private router : Router , private registerService : RegisterService , private userDataService : UserDataService ){}
  ngOnInit(): void {
//     const storedmail= localStorage.getItem('u');
//     const userDataString = localStorage.getItem('userData');
//     if (userDataString) {
//       const userData = JSON.parse(userDataString);
//       // Assign the email to your component's user object
    

 
//   this.registerService.findregister(userData.email).subscribe(
//     (data:any) => {
//       this.user.registration=data;

//       console.log("Registration data: " , data);
//     }
//     // (error) => {
//     //   console.log(error);
//     //   alert('Error occurred while finding registration');
//     // }
//   );
// }
 
  }

  formSubmit(){
      const userData = this.userDataService.getUserData();
    
      userData.family=this.user
      console.log(userData);
      this.router.navigate(['edu_info'])

    //  this.registerService.addfamily(this.user).subscribe(
    //   (data)=>{
    //     console.log(data);

    //     this.familyStatus='';
    //     this.familyType='';
    //     this.fatherName='';
    //     alert('family Details sucessfully filled');
    //   }
    //   ,(error)=>{
    //     console.log(error);
    //     alert('something went wrong');
    //   }
    //  )
  }
register(){
  if(this.familyStatus==''){
    alert('Personal Details sucessfully filled');
    return ;
  }
  if(this.user.familyType==''){
    alert('Personal Details sucessfully filled');
    return;
  }
  if(this.user.fatherName==''){
    alert('Personal Details sucessfully filled');
    return;
  }
  this.formSubmit();
}

}
