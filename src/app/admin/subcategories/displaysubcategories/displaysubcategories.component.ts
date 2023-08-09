import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-displaysubcategories',
  templateUrl: './displaysubcategories.component.html',
  styleUrls: ['./displaysubcategories.component.css']
})
export class DisplaysubcategoriesComponent implements OnInit {
constructor(private service:AuthService){}
arr:any[]=[]
catid:any[]=[]
catarr:any[]=[]
id:any=''
p:number=1
  ngOnInit(): void {
    this.service.getallsubcat().subscribe((data:any)=>{
      console.log(data.data)
      this.arr=data.data
   
    })
    

  }
  deletes(data:any){
      this.service.deletesubcat(data._id).subscribe((data:any)=>{
        console.log(data)
        Swal.fire({text:"Successfully Deleted",
        confirmButtonColor: 'red'})      })
  }
}
