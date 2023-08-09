import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cookie:CookieService, private service:AuthService) { }
  //Slider settings
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1} ;
  cat :any[]=[]
  women:String=""
  male:String=""
  sub:any=[]
  last:any[]=[]
  un:any
  pn:any
  ngOnInit(): void {
  
  
    this.service.getlast().subscribe((data:any)=>{
      this.last=data
    })

    this.service.getallproduct().subscribe((data:any)=>{
      this.pn=data.results
    })
    
    this.service.displayuser().subscribe((data:any)=>{
      console.log(data)
    this.un=data.results
    })

    this.service.getallcat().subscribe((data:any)=>{

      this.cat=data.data
      console.log(this.cat)
      // this.women=data.data[1].name
      // this.male=data.data[0].name
    })
    // this.service.getallsubcat().subscribe((data:any)=>{
    //   console.log(data.data)
    //  this.sub=data.data
    // })
  }
myForm = new FormGroup({
  cat : new FormControl()
})
getcat(){
  this.service.getsubbycat(this.women).subscribe((data:any)=>{
    this.sub=data.data
  
  })
}
cart(id:any){
  this.service.addcart(id).subscribe( (response) => {
    console.log(response);
    Swal.fire("Successfully Added to Cart")
  },
  (error) => {
    console.error(error);
  })
 }
 wish(id:any){
  const userId=this.cookie.get('user')
  const data = {userId:JSON.parse(userId)._id,productId:id}
  this.service.addfavorit(data).subscribe((data:any)=>{
    console.log(data)

    Swal.fire("Successfully Added to Favorit")
  })
 }

}