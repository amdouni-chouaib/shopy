import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import {enableProdMode} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ToastrService,ToastrModule } from 'ngx-toastr';
import Swal from 'sweetalert2';


enableProdMode();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  showAlert: boolean = false;
  err:any=""
  constructor(private router:Router,private toastr: ToastrService,private authService: AuthService,private cookieService: CookieService) {
    this.toastr.toastrConfig.positionClass = 'toast-top-right'; // set the position of the toastr
    this.toastr.toastrConfig.toastClass = 'toast-green'; // set the color of the toastr
  }
  
  myForm = new FormGroup({
    email :new FormControl("",[Validators.email,Validators.required]),
    password :new FormControl("",[Validators.required]),

  })
  get registerFormControl() {
    return this.myForm.controls;
  }

  onSubmit(){
    this.authService.signin(this.myForm.value).subscribe((data:any)=>{
      console.log(data.data.user.role)
      let expireDate = new Date();
      expireDate.setDate(expireDate.getDate() + 7 ); //for 24h we user this (24 * 60 * 60 * 1000)
      this.cookieService.set('token', data.token);
      this.cookieService.set('user',JSON.stringify(data.data.user))
     console.log("this is stored token in cookies"+" "+this.cookieService.get('token'),+" 'user data'  "+JSON.stringify(data.data.user))
      this.authService.setData(data.data.user.role)
      this.cookieService.set("roles",data.data.user.role)
     Swal.fire(
      'SUccessfully Logged In'
    )
      console.log(data.data.user.role)
     
   if(data.data.user.role==="user"){
        this.router.navigate(['/myprofile']);
     }else{
         this.router.navigate(['/admin/home']);

       }
 
    },(error:any)=>{
      this.showAlert=true
      this.err=error.error.message
      console.log(error)
    })


  }
}
function openPopup() {
  throw new Error('Function not implemented.');
}

