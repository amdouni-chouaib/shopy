import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addsubcategories',
  templateUrl: './addsubcategories.component.html',
  styleUrls: ['./addsubcategories.component.css']
})
export class AddsubcategoriesComponent implements OnInit {
constructor(private service:AuthService){}
arr:any[]=[]
  ngOnInit(): void {
this.service.getallcat().subscribe((data:any)=>{
  this.arr=data.data
  console.log(data.data)
})
  }
myForm = new FormGroup({
  name:new FormControl("",[Validators.required]),
  category:new FormControl("",[Validators.required])
})
addcat(){
  this.service.addsubcat(this.myForm.value).subscribe((data:any)=>{
    console.log(data)
    Swal.fire("SubCategory Added Successfully")
    this.myForm.reset()

  })
}
}
