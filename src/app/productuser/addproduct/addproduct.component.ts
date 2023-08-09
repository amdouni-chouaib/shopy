import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  arr: any[] = [];
    constructor(){

    }
  ngOnInit(): void {

  }

    myForm = new FormGroup({
        title : new FormControl("",[Validators.required,Validators.email]),
        
        description : new FormControl("",[Validators.required]),

        gender: new FormControl("",[Validators.required]),

        type : new FormControl("",[Validators.required]),

        prix :new FormControl("",[Validators.required])
    })
    get control(): any {
      return this.myForm;
   }


    resF(){
     
      this.arr.push(this.myForm.value)
      localStorage.setItem("pA",JSON.stringify(this.arr))
        console.log(this.arr)
    }



}
