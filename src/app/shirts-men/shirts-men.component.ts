import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shirts-men',
  templateUrl: './shirts-men.component.html',
  styleUrls: ['./shirts-men.component.css']
})
export class ShirtsMenComponent implements OnInit {
  p:number=1
  constructor(private service:AuthService,private route: ActivatedRoute){}
  product:any[]=[]
  ngOnInit(): void {
    this.service.getsubcatwithcat(this.route.snapshot.params['id']).subscribe((data:any)=>{
      this.product=data.products
      console.log(this.product)
    })
  }
  cart(id:any){
    
    this.service.addcart(id).subscribe( (response) => {
      console.log(response);
    },
    (error) => {
      console.error(error);
    })
   }

}
