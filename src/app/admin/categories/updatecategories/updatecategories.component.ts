import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatecategories',
  templateUrl: './updatecategories.component.html',
  styleUrls: ['./updatecategories.component.css']
})
export class UpdatecategoriessComponent {
  constructor(private service:AuthService,private route: ActivatedRoute){}
  myForm= new FormGroup({
    name:new FormControl("",[Validators.required])
  })


  updateC(){
    
    this.service.updatecat(this.route.snapshot.params['id'],this.myForm.value).subscribe((data:any)=>{
      console.log(data)
      Swal.fire("Category Updated Successfully")
      this.myForm.reset()

    })
  }
}
