import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-shirts-women',
  templateUrl: './shirts-women.component.html',
  styleUrls: ['./shirts-women.component.css']
})
export class ShirtsWomenComponent implements OnInit {
  collection : any[] = []
result : number = 0
  id: any=0
  num:String[]=[]
  constructor(private service:AuthService){}
  ngOnInit(): void {
    this.getdata()
  } 
  getdata() {
    this.service.getallproduct().subscribe((data:any)=>{
      this.collection=data.data 
      this.result=data.results
      
       console.log(this.collection)
       //console.log(this.id)
       for (let i=0;i<=this.collection.length-1;i++){
        if (this.collection[13].category.name !==null){
          this.num.push(this.collection[13].category.name)
        }
       }
       console.log(this.num.length)
    //    for (let i = 1; i < this.collection.length; i++) {
    //    this.service.getbysub(this.collection[i].subcategories[0]).subscribe((data:any)=>{
    //     if(data.data.name==="Trousers" && this.collection[i].category.name==="Female"){
    //       console.log(this.collection[i].category.name , data.data.name )
    //       return true
    //     }else{
    //       return false
    //     }
    //   })
    // }
  
  
    })
  
  }
}
