import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminUserMgmtComponent } from './admin-user-mgmt/admin-user-mgmt.component';
import { AdminProdMgmtComponent } from './admin-prod-mgmt/admin-prod-mgmt.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { EditproductComponent } from './editproduct/editproduct.component';

const routes: Routes = [{path:"",component:LandingComponent},
{path:"admin-login",component:AdminLoginComponent},
{path:"admin-home",component:AdminhomeComponent},
{path:"admin-usermgmt",component:AdminUserMgmtComponent},
{path:"admin-prodmgmt",component:AdminProdMgmtComponent},
{path:"admin-add-product",component:AdminAddProductComponent},
{path:"editproduct/:id",component:EditproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
