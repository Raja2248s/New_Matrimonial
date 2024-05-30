import { Component, OnInit } from '@angular/core';
import { PersonalPhotoService } from '../personal-photo.service';
import { HttpClientModule } from '@angular/common/http';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {
  users : any[] = [];
  loading : boolean= true;
  error:string='';
  photoURL : string ='';
  photos: {rid:number,  age: number, bloodgroup: string, photograph: string }[] = [];


  constructor(private registerService : RegisterService , private router : Router) { }

  ngOnInit(): void {
   this.registerService.getPhotos().subscribe(
    (data)=>{
      console.log(data);
      this.photos=data;
      this.loading=false;
      } , 
      (error)=>{
        console.log(error);
        this.error='Error fetching photots';
        this.loading=false;
      }
   )
  }
    
  logRid(rid: number) {
    console.log("clicked");
   sessionStorage.setItem('details' ,rid.toString() );
   this.router.navigate(['details'])
  }
  
}
