import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent {

  constructor(private rout:Router){}

  adminUserMgmt(){
this.rout.navigateByUrl("admin-usermgmt")
  }
  adminProdMgmt(){
    this.rout.navigateByUrl("admin-prodmgmt")

  }
}
