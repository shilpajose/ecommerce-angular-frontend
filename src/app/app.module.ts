import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminUserMgmtComponent } from './admin-user-mgmt/admin-user-mgmt.component';
import { AdminProdMgmtComponent } from './admin-prod-mgmt/admin-prod-mgmt.component';
import { HttpClientModule} from '@angular/common/http';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserRegisterComponent } from './user-register/user-register.component'

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    AdminLoginComponent,
    AdminhomeComponent,
    AdminUserMgmtComponent,
    AdminProdMgmtComponent,
    AdminAddProductComponent,
    EditproductComponent,
    SingleproductComponent,
    UserloginComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
