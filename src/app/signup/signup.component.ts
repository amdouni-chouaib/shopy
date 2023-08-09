import { Component } from '@angular/core';
import {FormGroup , FormControl, Validators} from '@angular/forms'

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgxImageCompressService } from 'ngx-image-compress';
import { error } from 'jquery';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  image: string=""
  ali :any
  constructor(private roter:Router, private imageCompress: NgxImageCompressService,private service:AuthService,private routes :Router,){}



  myForm = new FormGroup({
    email :new FormControl("",[Validators.required,Validators.email]),
    name :new FormControl("",[Validators.required]),
    password :new FormControl("",[Validators.required,Validators.minLength(6)]),
    passwordConfirm :new FormControl("",[Validators.required,Validators.minLength(6)]),
    phone :new FormControl(0,[Validators.required]),
    profileImg:new FormControl("",[Validators.required])

  })
  getFileUrl(file: File, quality: number): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64Image = reader.result as string;
        this.imageCompress.compressFile(base64Image, -1, quality, quality).then(
          result => {
            resolve(result);
          },
          error => {
            reject(error);
          }
        );
      };
    });
  }
  

  // one file 
  onFileSelectedd(data: any, quality: number) {
    const file: File = data.target.files[0];
    this.getFileUrl(file, quality).then(
      url => {
        this.image=url
        console.log(url);
      },
      error => {
        console.error(error);
      }
    );
  }
  onSubmit(){
    const data={email:this.myForm.value.email,name:this.myForm.value.name,password:this.myForm.value.password,passwordConfirm:this.myForm.value.passwordConfirm,phone:this.myForm.value.phone,profileImg:this.image}
    this.service.signup(data).subscribe((data:any)=>{
      console.log(data)
      Swal.fire("Successfully signed Up")
      this.myForm.reset()
      this.roter.navigate(['/login'])
    },
    (error:any) => {
      this.ali=error.error
      Swal.fire(this.ali)

      console.log("hethy :",error);
    })



  }
}
