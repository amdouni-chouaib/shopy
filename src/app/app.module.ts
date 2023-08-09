import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsingleComponent } from './productsingle/productsingle.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FaqsComponent } from './faqs/faqs.component';
import { ErrComponent } from './err/err.component';
import { AboutComponent } from './about/about.component';
import { AddproductComponent } from './productuser/addproduct/addproduct.component';
import { DisplayproductComponent } from './productuser/displayproduct/displayproduct.component';
import { UpdateproductsComponent } from './admin/product/updateproduct/updateproduct.component';
import { AdduserComponent } from './admin/user/adduser/adduser.component';
import { DisplayuserComponent } from './admin/user/displayuser/displayuser.component';
import { ContactComponent } from './contact/contact.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ListofproductsComponent } from './listofproducts/listofproducts.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { OrdersManagementComponent } from './admin/orders-management/orders-management.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ToastrModule } from 'ngx-toastr';
import { AddsubcategoriesComponent } from './admin/subcategories/addsubcategories/addsubcategories.component';
import { DisplaysubcategoriesComponent } from './admin/subcategories/displaysubcategories/displaysubcategories.component';
import { AccessoriesWomenComponent } from './accessories-women/accessories-women.component';
import { CoatsWomenComponent } from './coats-women/coats-women.component';
import { ShirtsWomenComponent } from './shirts-women/shirts-women.component';
import { SweatersWomenComponent } from './sweaters-women/sweaters-women.component';
import { TrousersWomenComponent } from './trousers-women/trousers-women.component';
import { AccessoriesMenComponent } from './accessories-men/accessories-men.component';
import { CoatsMenComponent } from './coats-men/coats-men.component';
import { ShirtsMenComponent } from './shirts-men/shirts-men.component';
import { SweatersMenComponent } from './sweaters-men/sweaters-men.component';
import { TrousersMenComponent } from './trousers-men/trousers-men.component';
import { HeadersComponent } from './admin/headers/headers.component';
import   {AddproductsComponent} from './admin/product/addproduct/addproduct.component' 
import { DisplayproductsComponent } from './admin/product/displayproduct/displayproduct.component';
import { AddcategoriessComponent } from './admin/categories/addcategories/addcategories.component';
import { DisplaycategoriessComponent } from './admin/categories/displaycategories/displaycategories.component';
import { UpdatecategoriessComponent } from './admin/categories/updatecategories/updatecategories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { IndexComponent } from './admin/index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    AddproductsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsingleComponent,
    CartComponent,
    CheckoutComponent,
    ShopComponent,
    OrdersComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ProfileDetailsComponent,
    FaqsComponent,
    ErrComponent,
    AboutComponent,
    AddproductComponent,
    DisplayproductsComponent,
    DisplayproductComponent,
    UpdateproductsComponent,
    AdduserComponent,
    DisplayuserComponent,
    ContactComponent,
    FavoritesComponent,
    AjoutProduitComponent,
    MyprofileComponent,
    ListofproductsComponent,
    UpdateProductComponent,
    OrdersManagementComponent,
    OrderDetailsComponent,
    AddsubcategoriesComponent,
    DisplaysubcategoriesComponent,
    AccessoriesWomenComponent,
    CoatsWomenComponent,
    ShirtsWomenComponent,
    SweatersWomenComponent,
    TrousersWomenComponent,
    AccessoriesMenComponent,
    UpdatecategoriessComponent,
    DisplaycategoriessComponent,
    CoatsMenComponent,
    ShirtsMenComponent,
    SweatersMenComponent,
    TrousersMenComponent,AddcategoriessComponent,
    HeadersComponent,
    IndexComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    SlickCarouselModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,NgxPaginationModule
    ,ToastrModule.forRoot(),
    SweetAlert2Module.forRoot()
  ],

  
  providers: [CookieService],
  bootstrap: [AppComponent],

  //Rating
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
