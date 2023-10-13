import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  products:any=[]
  constructor(private rout:Router,private ds:DataService){}

  ngOnInit():void{
    this.ds.getAllProducts().subscribe({
      next:(result:any)=>{
        this.products=result.message
      }
    })
  }
}
