import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private cookie:CookieService,private service:AuthService){}
  arr:any=[]
  id:any[]=[]

  ngOnInit(): void {
   
    this.logged()
    this.service.getcart().subscribe((data:any)=>{
      //console.log(data)

      this.arr=data.data.cartItems
    let a =  JSON.stringify(this.arr)
      console.log("from"+JSON.parse(a))
      this.id=data.data.totalCartPrice
     // console.log(this.id)
    })
  }
  logged(){
    if(this.cookie.get("token").length!=0){
      return true
    }else{
      return false
    }
  }
  logout(){
    this.cookie.delete('roles');
    this.cookie.delete('token');

  }
  deleteitem(index:any){
    let indexs=index._id
    this.service.deletecartid(indexs).subscribe((data:any)=>{
      console.log(data)
      Swal.fire({text:"Successfully Element Deleted",
      confirmButtonColor: 'red',
    })
    })
  }
}
