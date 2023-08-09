import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listofproducts',
  templateUrl: './listofproducts.component.html',
  styleUrls: ['./listofproducts.component.css']
})
export class ListofproductsComponent implements OnInit {
constructor(private service:AuthService,private cookie:CookieService){}
  id:any
  arr:any[]=[]
  ngOnInit(): void {
    this.id=JSON.parse(this.cookie.get("user"))
    console.log(this.id._id)
    this.service.productbyuser(this.id._id).subscribe((data:any)=>{
      console.log(data)
      this.arr=data.products
      console.log(this.arr)
    })
  }

  deletep(data:any){
    //console.log(data._id)
    this.service.deleteproduct(data._id).subscribe((data:any)=>{
      console.log(data)
      Swal.fire({text:"Successfully Element Deleted",
      confirmButtonColor: 'red',
    })
    })
  }



}
