// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { AngularFireModule } from '@angular/fire/compat'
// import { environment } from 'src/environments/environment';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { FormsModule } from '@angular/forms';
// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
// import { VarifyEmailComponent } from './varify-email/varify-email.component';
// import { FileuploadComponent } from './fileupload/fileupload.component';
// import { HttpClientModule } from '@angular/common/http';
// import { PersonalInfoComponent } from './personal-info/personal-info.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     RegisterComponent,
//     DashboardComponent,
//     ForgotPasswordComponent,
//     VarifyEmailComponent,
//     FileuploadComponent,
    
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     AngularFireModule.initializeApp(environment),
//     FormsModule,
//     HttpClientModule,
//   ],  
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VarifyEmailComponent } from './varify-email/varify-email.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { FamilyInfoComponent } from './family-info/family-info.component';
import { InfoComponent } from './info/info.component';
import { EduInfoComponent } from './edu-info/edu-info.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HomeComponent } from './home/home.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ButtonModule } from 'primeng/button'; 
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { DetailsComponent } from './details/details.component';
import {MatTabsModule} from '@angular/material/tabs'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VarifyEmailComponent,
    FileuploadComponent,
    PersonalInfoComponent,
    FamilyInfoComponent,
    EduInfoComponent,
    UserInfoComponent,
    HomeComponent,
    ResetPasswordComponent,
   HeaderComponent,
   AdminComponent,
   DetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment),
    FormsModule,
    HttpClientModule,
    ButtonModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
