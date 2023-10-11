import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent {

  AddNewproductForm = this.fb.group({
    pname: [''],
    description: [''],
    price: [''],
    image: [''],
    rating: [''],
    count: ['']
  })
  constructor(private fb: FormBuilder, private ds: DataService,private rout:Router) { }

  addProduct() {
    var path = this.AddNewproductForm.value
    var pname = path.pname
    var description = path.description
    var price = path.price
    var image = path.image
    var rating = path.rating
    var count = path.count


    this.ds.addProductApi(pname, description, price, image, rating, count).subscribe({
      next: (result: any) => {
        alert(result.message)
        this.AddNewproductForm.reset()
        this.rout.navigateByUrl("admin-prodmgmt")
      },
      error: (result: any) => {
        alert(result.error.message)
      }
    })
  }

}
