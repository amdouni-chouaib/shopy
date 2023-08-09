import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { ErrComponent } from './err/err.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsingleComponent } from './productsingle/productsingle.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ShopComponent } from './shop/shop.component';
import { SignupComponent } from './signup/signup.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ListofproductsComponent } from './listofproducts/listofproducts.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HeadersComponent } from './admin/headers/headers.component';
import { AddcategoriessComponent } from './admin/categories/addcategories/addcategories.component';
import { DisplaycategoriessComponent } from './admin/categories/displaycategories/displaycategories.component';
import { UpdatecategoriessComponent } from './admin/categories/updatecategories/updatecategories.component';
import { AddproductsComponent } from './admin/product/addproduct/addproduct.component';
import { DisplayproductsComponent } from './admin/product/displayproduct/displayproduct.component';
import { UpdateproductsComponent } from './admin/product/updateproduct/updateproduct.component';
import { AdduserComponent } from './admin/user/adduser/adduser.component';
import { DisplayuserComponent } from './admin/user/displayuser/displayuser.component';
import { OrdersManagementComponent } from './admin/orders-management/orders-management.component';
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
import { ProfileComponent } from './admin/profile/profile.component';
import { IndexComponent } from './admin/index/index.component';


const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"header",component:HeaderComponent
  },
  {
    path:"footer",component:FooterComponent
  },
  
  {
    path:"product-single/:id",component:ProductsingleComponent
  },
  // {
  //   path:"product-single",component:ProductsingleComponent
  // },
  {
  path:"cart",component:CartComponent  
  },
  {
    path:"checkout",component:CheckoutComponent
  },
  {
    path:"forgot-password",component:ForgotPasswordComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"orders",component:OrdersComponent
  },
  {
    path:"profile-details",component:ProfileDetailsComponent
  },
  {
    path:"shop",component:ShopComponent
  },
  {
    path:"signup",component:SignupComponent
  },
  {
    path:"faq",component:FaqsComponent
  },
  {
    path:"about",component:AboutComponent
  },
  {
    path:"favorites",component:FavoritesComponent
  },
  {
    path:"myprofile",component:MyprofileComponent
  },
  {
    path:"listofproducts",component:ListofproductsComponent
  },
  {
    path:"ajout-produit",component:AjoutProduitComponent
  },
  {
    path:"update-product",component:UpdateProductComponent
  },
  {
    path:"contact",component:ContactComponent
  },
  {
    path:"order-details",component:OrderDetailsComponent
  },


   //admin
   {
    path:"admin/home",component:IndexComponent
   },
   {
    path:"admin/profile",component:ProfileComponent
   },
  //admin.headers
  {
    path:"admin/headers",component:HeadersComponent
  },
  //admin.categories
  {
    path:"admin/addcategories",component:AddcategoriessComponent
  },
  {
    path:"admin/displaycategories",component:DisplaycategoriessComponent
  },
  {
    path:"admin/updatecategories/:id",component:UpdatecategoriessComponent
  },
  //admin.subcategories
  {
    path:"admin/addsubcategories",component:AddsubcategoriesComponent
  },
  {
    path:"admin/displaysubcategories",component:DisplaysubcategoriesComponent
  },
  //admin.product
  {
    path:"addproduct",component:AddproductsComponent
  },
  {
    path:"displayproduct",component:DisplayproductsComponent
  },
  {
    path:"updateproduct/:id",component:UpdateproductsComponent
  },
  //admin.user
  {
    path:"adduser",component:AdduserComponent
  },
  {
    path:"displayuser",component:DisplayuserComponent
  },
  //admin.orders
  {
    path:"orders-management",component:OrdersManagementComponent
  },

  //sub-categories
  //women
  {
     path:"accessories-women",component:AccessoriesWomenComponent
   },
   {
     path:"coats-women",component:CoatsWomenComponent
   },
   {
     path:"shirts-women",component:ShirtsWomenComponent
   },
   {
     path:"sweaters-women",component:SweatersWomenComponent
   },
   {
     path:"trousers-women",component:TrousersWomenComponent
   },
   //men
   {
     path:"accessories-men",component:AccessoriesMenComponent
   },
   {
     path:"coats-men",component:CoatsMenComponent
   },
   {
     path:"filter/:id",component:ShirtsMenComponent
   },
   {
     path:"sweaters-men",component:SweatersMenComponent
   },
   {
     path:"trousers-men",component:TrousersMenComponent
   },

  {
    path:"**",component:ErrComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
