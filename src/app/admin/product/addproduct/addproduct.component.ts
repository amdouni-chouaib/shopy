import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { NgxImageCompressService } from 'ngx-image-compress';
import { AuthService } from 'src/app/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductsComponent implements OnInit {
constructor(private service:AuthService,private cookie:CookieService,private imageCompress: NgxImageCompressService){}
arr:any[]=[]
subv=""
  image:any=""
  sub:any[]=[]
  subc:any[]=[]
  values=""
  id:any=JSON.parse(this.cookie.get("user"))
  ngOnInit(): void {
    this.service.getallsubcat().subscribe((data)=>{
      for (let i = 0; i < data.results-5; i++) {
        this.sub.push({id:data.data[i]._id,name:data.data[i].name})
      }
      console.log(this.sub)

    })
    this.service.getallcat().subscribe((data)=>{
      console.log(data.data.length)
      for (let i = 0; i < data.data.length; i++) {
        this.arr.push({id:data.data[i]._id,name:data.data[i].name})
      }
    })
  }
  myForm = new FormGroup({
    title :new FormControl("",[Validators.required,Validators.minLength(3)]),
    category :new FormControl("",[Validators.required]),
    subcategories:new FormControl('',[Validators.required]),
    quantity :new FormControl(0,[Validators.required]),
    description: new FormControl("",[Validators.required,Validators.minLength(40)]),
    price :new FormControl(0,[Validators.required]),
    priceAfterDiscount :new FormControl(0,[Validators.required]),
    imageCover: new FormControl(this.image,[Validators.required]),
    createdBy : new FormControl(this.id._id,[Validators.required])

  })
  getFileUrl(file: File, quality: number): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64Image = reader.result as string;
        this.imageCompress.compressFile(base64Image, -1, quality, quality).then(
          result => {
            resolve(result);
          },
          error => {
            reject(error);
          }
        );
      };
    });
  }
  // one file 
  onFileSelectedd(data: any, quality: number) {
    const file: File = data.target.files[0];
    this.getFileUrl(file, quality).then(
      url => {
        this.image=url
        console.log("this is the picture",url);
      },
      error => {
        console.error(error);
      }
    );
  }
  getcat(){
    this.service.getsubbycat(this.values).subscribe((data:any)=>{
      this.subc=data.data
    })
  }

validerrP(){
  let datass={title:this.myForm.value.title,category:this.values,subcategories:[this.myForm.value.subcategories],quantity:this.myForm.value.quantity,description:this.myForm.value.description,price:this.myForm.value.price,priceAfterDiscount:this.myForm.value.priceAfterDiscount,imageCover:this.image,createdBy:this.id._id}

  console.log(this.myForm.value.subcategories)
  console.log(datass)
  this.service.addproduct(datass).subscribe((data:any)=>{
    console.log(data)
    Swal.fire("Product Added successfully")
    this.myForm.reset()


  })
}
}