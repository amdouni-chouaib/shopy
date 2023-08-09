import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-displayproduct',
  templateUrl: './displayproduct.component.html',
  styleUrls: ['./displayproduct.component.css']
})
export class DisplayproductsComponent implements OnInit {
  p: number = 1;

constructor(private service:AuthService){
  

}
arr:any[]=[]

  ngOnInit(): void {
    const a = this.service.getallproduct().subscribe((data:any)=>{
      try {
        this.arr=data.data
        console.log(data.data[23].category.name)
      } catch (error) {
        console.error('Error parsing JSON data:', error);

      }
    console.log(this.arr[23].category.name)
    })
  }
 
  deletes(data:any){
this.service.deleteproduct(data._id).subscribe((data:any)=>{
  console.log(data)
  Swal.fire({text:"Successfully Deleted",
  confirmButtonColor: 'red'})})
 
  }




}
