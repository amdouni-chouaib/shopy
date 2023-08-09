import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  pn:any
  un:any
constructor(private auth:AuthService){}
  ngOnInit(): void {
this.auth.getallproduct().subscribe((data:any)=>{
  this.pn=data.results
})

this.auth.displayuser().subscribe((data:any)=>{
this.un=data.results
})
  }

}
