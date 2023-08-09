import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularshop';
  test=false
  token=false
  user:any
  constructor(private cookie:CookieService,private auth:AuthService){}
  role:any
  ngOnInit(): void {


    this.user=this.cookie.get("roles")
   // 

   //console.log(this.user);
   console.log(this.cookie.check("roles"));

   // console.log(this.role.role);
    this.cookie.set("role","user")
    this.role=this.cookie.get("role")
    
  }
  
  
  
  checknavbar(){
    if(this.cookie.check("roles")){
         // console.log(this.role.role);

        return false 
    } 
    else{
      console.log(this.cookie.get("roles"));
        return true
    }
    if(this.role==="user"){
      return true
    }
   if(this.cookie.get("token").length!=0 && this.auth.getData()==="admin"){
    return true
   }else{
    return false
   }

    
        
      }
  
      checknavbarr(){
        let rol:any
        rol=this.cookie.get("roles")
        console.log(this.cookie.get("roles"));
        if(rol  ==="admin"){
          
            return true 
        } 
        else{
            return false
        }
        
            
          }
 

  


}