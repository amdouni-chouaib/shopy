import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Alert } from 'bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  constructor(private route:Router){}
  order(){
    Swal.fire({
    title:"Would you like to confirm order",
    
    confirmButtonColor: 'green',
    confirmButtonText: 'yes',
    cancelButtonText: 'no',
    cancelButtonColor: 'red',
    showCancelButton: true,

  }).then(()=>{
    this.route.navigate(["/"])
  })


}
}
