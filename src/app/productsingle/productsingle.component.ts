import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productsingle',
  templateUrl: './productsingle.component.html',
  styleUrls: ['./productsingle.component.css']
})
export class ProductsingleComponent implements OnInit {
  constructor(private cookie:CookieService, private service:AuthService,private route: ActivatedRoute){}
  user:any
  arr:any[]=[]
    ngOnInit(): void {
      this.service.getreviewall(this.route.snapshot.params['id']).subscribe((data:any)=>{
        console.log(data)
        this.arr=data.data
      })



      this.service.getby(this.id).subscribe((data:any)=>{
        this.collection=data.data
        console.log(this.collection)
      })
      console.log(this.collection)
     
    } 

   
    obj={id:this.route.snapshot.params['id'],color:"blue"}
    id :any = this.route.snapshot.params['id'];
    collection:any=[]
    cart(){
      this.service.addcart(this.id).subscribe( (response) => {
        console.log(response);
        Swal.fire("Added To Cart")
      },
      (error) => {
        console.error(error);
      })
      
     }
       model={title:"",ratings:"",user:"",product:""}

       ratingChanged(data:any){
        this.model.ratings=data.detail
      }
     rated(){
      this.model.product=this.route.snapshot.params['id']
      this.user=JSON.parse(this.cookie.get("user"))
      this.model.user=this.user._id
      // console.log(this.model)
      this.service.postreview(this.model).subscribe((data:any)=>{
        console.log(data)
        Swal.fire("Review Added successfully")
      })
    }
}
