import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

  constructor(private fb: FormBuilder, private ds: DataService, private rout: Router) { }

  userloginForm = this.fb.group({
    email: [''],
    psw: ['']
  })

  userLogin() {
    this.ds.userLogin(this.userloginForm.value.email, this.userloginForm.value.psw).subscribe({
      next: (result: any) => {
        alert(result.message)
        localStorage.setItem("User",result._id)
        this.rout.navigateByUrl("")
      },
      error:(result:any)=>{
        alert(result.error.message)
        this.rout.navigateByUrl("user-register")
      }
    })
  }

}
