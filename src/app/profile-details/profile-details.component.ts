import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  constructor(private cookie:CookieService,private service:AuthService){}
  data:any=this.cookie.get("user")
  name:any
  arr:any
  
//  arr:any{email:String,phone:String,name:String}
  ngOnInit(): void {
    console.log(this.cookie.get("token"))

  console.log(this.cookie.get("user"))
  this.arr=JSON.parse(this.cookie.get("user"))
  console.log(this.arr)
 
  }
  
  myForm = new FormGroup({
   
    currentPassword :new FormControl(""),
    password :new FormControl(""),
    passwordConfirm :new FormControl("")
  })
   
   //data = {password:this.myForm.value.password,currentPassword:this.myForm.value.currentPassword,passwordConfirm:this.myForm.value.passwordConfirm}
   //data = {password:"this.myForm.value.password",currentPassword:"this.myForm.value.currentPassword",passwordConfirm:"this.myForm.value.passwordConfirm"}

  updates(){
    console.log(this.arr._id)
    console.log(this.myForm.value)
    this.service.updatepassword(this.myForm.value,this.arr._id).subscribe((data)=>{
      console.log(data)

      Swal.fire("Password Successfully Modified")



    })
  }




}
