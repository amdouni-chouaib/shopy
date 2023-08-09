import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  constructor(private service:AuthService){}



  myForm = new FormGroup({
    email :new FormControl(""),
  
  })
  onSubmit(){
    console.log()
    this.service.forget(this.myForm.value.email).subscribe((data:any)=>{
      console.log(data)
    })
    


  }
}
