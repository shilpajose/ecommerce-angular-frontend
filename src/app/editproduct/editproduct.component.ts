import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent {

   id:any=''
   pdata:any={}
  constructor(private rout:Router,private ds:DataService,private ar:ActivatedRoute){}
  
  ngOnInit():void{
    this.ar.params.subscribe(data=>{
      this.id = data["id"]
       console.log(this.id);
    })

    this.ds.editProductApi(this.id,this.pdata).subscribe({
      next:(result:any)=>{
        this.pdata = result
        console.log(this.pdata);
        
      }
    })

  }
  editProduct(){
    this.ds.editProductApi(this.id,this.pdata).subscribe({
      next:(result:any)=>{
        alert('product data updated')
        this.rout.navigateByUrl(`admin-prodmgmt/${this.id}`)
      }
    })
  }
}
