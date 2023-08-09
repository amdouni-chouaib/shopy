import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { NgxImageCompressService } from 'ngx-image-compress';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit{
  arr:any[]=[]
  image:any=""

  sub:any[]=[]
  constructor(private service:AuthService,private cookie:CookieService,private imageCompress: NgxImageCompressService){}
  id:any=JSON.parse(this.cookie.get("user"))



  ngOnInit(): void {

    this.service.getallsubcat().subscribe((data)=>{
      console.log(data)
      for (let i = 0; i < data.results-5; i++) {
              this.sub.push({id:data.data[i]._id,name:data.data[i].name})
          }

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
    subcategories: new FormControl([""],[Validators.required]),
    colors :new FormControl([""],[Validators.required]),
    quantity :new FormControl(0,[Validators.required]),
    description: new FormControl("",[Validators.required,Validators.minLength(40)]),
    price :new FormControl(0,[Validators.required]),
    priceAfterDiscount :new FormControl(0,[Validators.required]),
    imageCover: new FormControl(this.image,[Validators.required]),
   // images: new FormControl(""),
    createdBy : new FormControl(this.id._id,[Validators.required])

  })
  data:any
  produitup(){
   let datass={title:this.myForm.value.title,category:this.myForm.value.category,subcategories:[this.myForm.value.subcategories],colors:[this.image],quantity:this.myForm.value.quantity,description:this.myForm.value.description,price:this.myForm.value.price,priceAfterDiscount:this.myForm.value.priceAfterDiscount,imageCover:this.image,createdBy:this.id._id}

console.log(datass)
    this.service.addproduct(datass).subscribe((data:any)=>{
      console.log(data)
      Swal.fire("Successfully Added")
      this.myForm.reset()

    })
  }


 



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
        console.log(url);
      },
      error => {
        console.error(error);
      }
    );
  }

  // multiple file 
  getUrls(event: any, quality: number): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
      const files: FileList = event.target.files;
      const urls: string[] = [];
      let completed = 0;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = () => {
          const base64Image = reader.result as string;
          this.imageCompress.compressFile(base64Image, -1, quality, quality).then(
            result => {
              urls.push(result);
              completed++;
              if (completed === files.length) {
                resolve(urls);
              }
            },
            error => {
              reject(error);
            }
          );
        };
        reader.readAsDataURL(file);
      }
    });
  }
  onFileSelected(event: any, quality: number) {
    this.getUrls(event, quality).then(
      urls => {
        console.log(urls);
      },
      error => {
        console.error(error);
      }
    );
  }
    
  
}
