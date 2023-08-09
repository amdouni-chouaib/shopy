import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxImageCompressService } from 'ngx-image-compress';
import { AuthService } from 'src/app/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
constructor(private service:AuthService,private imageCompress: NgxImageCompressService){}
image:any=""
myForm=new FormGroup({
  email:new FormControl("",[Validators.required,Validators.email]),
  name:new FormControl("",[Validators.required]),
  password:new FormControl("",[Validators.required,Validators.minLength(6)]),
  passwordConfirm : new FormControl("",[Validators.required,Validators.minLength(6)]),
  profileImg:new FormControl(this.image),
  phone:new FormControl("",[Validators.required]),
  role:new FormControl("",[Validators.required])
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

valider(){
  let datass={email:this.myForm.value.email,name:this.myForm.value.name,password:this.myForm.value.password,passwordConfirm:this.myForm.value.passwordConfirm,profileImg:this.image,phone:this.myForm.value.phone,role:this.myForm.value.role}

this.service.adduser(datass).subscribe((data:any)=>{
  console.log(data)
  Swal.fire("user added successfully")
  this.myForm.reset()
})
}
}
