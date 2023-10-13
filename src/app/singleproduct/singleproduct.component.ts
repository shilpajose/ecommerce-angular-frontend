import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent {

  pid:any=''
  pdata:any=''
  products:any=[]
  constructor(private ds:DataService,private ar:ActivatedRoute , private rout:Router){}

  ngOnInit():void{
    this.ar.params.subscribe((data:any)=>{
      this.pid=data.id
      this.ds.getoneproduct(this.pid).subscribe({
        next:(result:any)=>{
          this.pdata=result.message
        }
      })
    })

    this.ds.getAllProducts().subscribe({
      next:(result:any)=>{
        this.products=result.message
      }
    })
  }
// if not login say user to login
  addToCart(){

    if(localStorage.getItem("User")){

    }
    else{
      alert('please login')
      this.rout.navigateByUrl("user-login")
    }
  }
}
