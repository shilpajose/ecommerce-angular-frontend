import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  constructor(private fb: FormBuilder, private rout: Router,private ds:DataService) { }

  adminloginForm = this.fb.group({
    auname: [''],
    apasw: ['']
  })
  adminLogin() {
      var path= this.adminloginForm.value
      var auname=path.auname
      var apasw=path.apasw

      this.ds.adminLoginApi(auname,apasw).subscribe({
        next:(result:any)=>{
          alert(result.message)
          this.rout.navigateByUrl("admin-home")
        },
        error:(result:any)=>{
          alert(result.error.message)
        }
      })

  }
}
