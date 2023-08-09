import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displayproduct',
  templateUrl: './displayproduct.component.html',
  styleUrls: ['./displayproduct.component.css']
})
export class DisplayproductComponent implements OnInit {
  arr:any[]=[]
  ngOnInit(): void {
  
    this.arr.push(JSON.stringify(localStorage.getItem("pA"))).toString()
   
  }
  

dis(){
  console.log(this.arr[0].title)
  
}


}
