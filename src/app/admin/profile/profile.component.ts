import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  arr:any
  image:any
  email:any
  phone:any
  name:any
  constructor(private cookie:CookieService){}
  ngOnInit(): void {
    this.arr=JSON.parse(this.cookie.get("user"))
    console.log(this.arr.name)
    this.image=this.arr.profileImg
    this.email=this.arr.email
    this.name=this.arr.name

    this.phone=this.arr.phone

  }

}
