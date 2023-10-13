import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  constructor(private fb:FormBuilder,private ds:DataService,private rout:Router){}

  userReisterForm=this.fb.group({
    email:[''],
    psw:['']
  })

  register(){
this.ds.userRegiter(this.userReisterForm.value.email,this.userReisterForm.value.psw).subscribe({
  next:(result:any)=>{
    alert(result.message)
    this.rout.navigateByUrl("user-login")
  },
  error:(result:any)=>{
    alert(result.error.message)
  }
})
  }
}
