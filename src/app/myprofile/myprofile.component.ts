import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  constructor(private cookie:CookieService){}
  email:String=""
  phone:any
  arr:any
//  arr:any{email:String,phone:String,name:String}
  ngOnInit(): void {
  console.log(this.cookie.get("user"))
  this.arr=JSON.parse(this.cookie.get("user"))
  console.log(this.arr.name)
  
  }
}
