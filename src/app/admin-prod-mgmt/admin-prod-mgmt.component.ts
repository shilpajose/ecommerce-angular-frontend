import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-admin-prod-mgmt',
  templateUrl: './admin-prod-mgmt.component.html',
  styleUrls: ['./admin-prod-mgmt.component.css']
})
export class AdminProdMgmtComponent {

  pdata: any = []
  id:any

  constructor(private rout: Router, private ds: DataService) { }

  ngOnInit(): void {

    
    // get all product
    this.ds.getAllProducts().subscribe({
      next: (result: any) => {
        // console.log(result.message);
        this.pdata = result.message
      }
    })
  }

  adminProdMgmt() {

  }

  addNew() {
    this.rout.navigateByUrl("admin-add-product")
  }
  editpage(id:any){
    this.rout.navigateByUrl(`editproduct/${id}`)
  }
  deleteProduct(){
    this.ds.removeProduct(this.id).subscribe({
      next:(result:any)=>{
        alert(`Are you sure! Do you want to delete this item`)
        this.rout.navigateByUrl("admin-prodmgmt")
      }
    })
  }

}
