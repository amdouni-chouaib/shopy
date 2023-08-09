import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookie:CookieService, private http:HttpClient) { }
  id:any
  someData:any


  url = "http://localhost:5000/api/v1/auth/signup"
  url1 = "http://localhost:5000/api/v1/auth/login"
  url2 = "http://localhost:5000/api/v1/auth/ForgotPassword"
  url3="http://localhost:5000/api/v1/products"
  signup(user:any):Observable<any>{
    return this.http.post<any>(this.url, user);
  }
  signin(user:any):Observable<any>{
    return this.http.post<any>(this.url1, user);
  }
  forget(user:any):Observable<any>{
    return this.http.post<any>(this.url2, user);
  }
  getallproduct():Observable<any>{
    return this.http.get<any>(this.url3);
  }
  getby(id:any):Observable<any>{
    return this.http.get<any>("http://localhost:5000/api/v1/products/"+id);
  }
  getallcat():Observable<any>{
    return this.http.get<any>("http://localhost:5000/api/v1/categories");
  }
  getallsubcat():Observable<any>{
    return this.http.get<any>("http://localhost:5000/api/v1/subcategories");
  }
  addcart(productId:String):Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    const body ={productId}
    return this.http.post<any>("http://localhost:5000/api/v1/cart",body,{headers});
  }
  getbysub(id:any):Observable<any>{
    return this.http.get<any>("http://localhost:5000/api/v1/subcategories/"+id)
  }

  getcart():Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    return this.http.get<any>("http://localhost:5000/api/v1/cart",{headers})
  }
  
  updatepassword(data:any,id:any):Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    return this.http.put<any>("http://localhost:5000/api/v1/users/changePassword/"+id,data,{headers})

  }
  addproduct(data:any):Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    return this.http.post<any>("http://localhost:5000/api/v1/products",data,{headers})
  }
  productbyuser(id:any):Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    return this.http.get<any>("http://localhost:5000/products/"+id,{headers})
  }
  deleteproduct(id:any):Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    return this.http.delete<any>("http://localhost:5000/api/v1/products/"+id,{headers})
  }
  updateprod(data:any,id:any):Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    return this.http.put<any>("http://localhost:5000/api/v1/products/"+id,data,{headers})
  }
  getprodone(id:any):Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    return this.http.delete<any>("http://localhost:5000/api/v1/products/"+id,{headers})
  }
  deletecartid(id:any):Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    return this.http.delete<any>("http://localhost:5000/api/v1/cart/"+id,{headers})

    
  }
  clearcart():Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    return this.http.delete<any>("http://localhost:5000/api/v1/cart/",{headers})

    
  }
  addfavorit(data:any):Observable<any>{
    

    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    return this.http.post<any>("http://localhost:5000/api/v1/wishlist",data,{headers})

    
  }
  getfav():Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    return this.http.get<any>("http://localhost:5000/api/v1/wishlist",{headers})

  }

  deletefav(id:any):Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    return this.http.delete<any>("http://localhost:5000/api/v1/wishlist/"+id,{headers})
  }
  adduser(data:any):Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    return this.http.post<any>("http://localhost:5000/api/v1/users",data,{headers})
  }
  displayuser():Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    return this.http.get<any>("http://localhost:5000/api/v1/users",{headers})
  }
  deleteuser(id:any):Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    return this.http.delete<any>("http://localhost:5000/api/v1/users/"+id,{headers})
  }
  
  addsubcat(data:any):Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    return this.http.post<any>("http://localhost:5000/api/v1/subcategories",data,{headers})
  }
  getonecat(id:any):Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    return this.http.get<any>("http://localhost:5000/api/v1/categories/"+id,{headers})
  }
  deletesubcat(id:any):Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    return this.http.delete<any>("http://localhost:5000/api/v1/subcategories/"+id,{headers})
  }
  addcat(data:any):Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    return this.http.post<any>("http://localhost:5000/api/v1/categories",data,{headers})
  }
  deletecat(id:any):Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    return this.http.delete<any>("http://localhost:5000/api/v1/categories/"+id,{headers})
  }
  updatecat(id:any,data:any):Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    return this.http.put<any>("http://localhost:5000/api/v1/categories/"+id,data,{headers})
  }
  getsubbycat(id:any):Observable<any>{
    return this.http.get<any>("http://localhost:5000/api/v1/categories/"+id+"/subcategories")
  }
  getsubcatwithcat(id:any):Observable<any>{
    return this.http.get<any>("http://localhost:5000/subcategory/"+id)
  }
  getlast():Observable<any>{
    return this.http.get<any>("http://localhost:5000/latest-products")
  }
setData(data:any):any{
  return this.someData=data
}
  getData(): any {
    return this.someData;
  }
  postreview(data:any):Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));

    return this.http.post<any>("http://localhost:5000/api/v1/reviews",data,{headers})
  }
  getreviewall(id:any):Observable<any>{

    return this.http.get<any>("http://localhost:5000/api/v1/products/"+id+"/reviews")
  }
  filterlatest():Observable<any>{

    return this.http.get<any>("http://localhost:5000/latest")
  }
  filterhighp():Observable<any>{

    return this.http.get<any>("http://localhost:5000/highp")
  }
  filterlowp():Observable<any>{

    return this.http.get<any>("http://localhost:5000/lowp")
  }
  filterrate():Observable<any>{

    return this.http.get<any>("http://localhost:5000/rate")
  }
  

}
