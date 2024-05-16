import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VarifyEmailComponent } from './varify-email/varify-email.component';
import { AllProfilesComponent } from './all-profiles/all-profiles.component';
import { InfoComponent } from './info/info.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { FamilyInfoComponent } from './family-info/family-info.component';
import { EduInfoComponent } from './edu-info/edu-info.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
   {path: '', redirectTo:'register', pathMatch:'full'},
  {path: 'login', component : LoginComponent},
  {path: 'dashboard', component : DashboardComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'varify-email', component : VarifyEmailComponent},
  {path: 'forgot-password', component : ForgotPasswordComponent},
  {path : 'file-upload', component:FileuploadComponent},
  {path:'all_profiles',component:AllProfilesComponent},
  {path:'info',component:InfoComponent},
  {path:'profile_details',component:ProfileDetailsComponent},
  {path:'user_profile',component:UserProfileComponent},
  {path:'personal_info',component:PersonalInfoComponent},
  {path:'family_info',component:FamilyInfoComponent},
  {path:'edu_info',component:EduInfoComponent},
  {path:'user_info' , component:UserInfoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
