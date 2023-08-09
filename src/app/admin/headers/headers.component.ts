import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent {
  
  

constructor(private cookie:CookieService,private Route:Router,private location: Location) {}

logout(){
  this.cookie.delete('roles');
  this.cookie.delete('token');

}
}
