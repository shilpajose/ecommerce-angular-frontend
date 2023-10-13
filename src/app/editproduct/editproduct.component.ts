import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent {

   pid:any=''
   pdata:any={}
  constructor(private rout:Router,private ds:DataService,private ar:ActivatedRoute){}
  
  ngOnInit():void{
    // after edit butto click get id throuh url/param
    this.ar.params.subscribe((data:any)=>{
      this.pid = data.id
      //  console.log(this.id);
    })

    this.ds.getoneproduct(this.pid).subscribe({
      next:(result:any)=>{
        this.pdata = result.message
        // console.log(this.pdata);
      }
    })

  }
  editProduct(){
    this.ds.editProductApi(this.pid,this.pdata).subscribe({
      next:(result:any)=>{
        alert('product data updated')
        // this.rout.navigateByUrl(`admin-prodmgmt/${this.id}`)
        this.rout.navigateByUrl(`admin-prodmgmt`)
      }
    })
  }
}
