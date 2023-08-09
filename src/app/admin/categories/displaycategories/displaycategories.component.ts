import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-displaycategories',
  templateUrl: './displaycategories.component.html',
  styleUrls: ['./displaycategories.component.css']
})
export class DisplaycategoriessComponent implements OnInit {
constructor(private service:AuthService){}
arr:any[]=[]
p : number =1
  ngOnInit(): void {
    this.service.getallcat().subscribe((data:any)=>{
      this.arr=data.data
    })
  }
  deleteCat(data:any){
    this.service.deletecat(data._id).subscribe((data:any)=>{
      console.log(data)
      Swal.fire({text:"Successfully Deleted",
      confirmButtonColor: 'red'})      
    })
  }

}
