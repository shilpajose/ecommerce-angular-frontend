import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl: any = "http://localhost:3000"

  constructor(private http:HttpClient) { }

  adminLoginApi(uname:any,psw:any){
    const body={uname,psw}
    return this.http.post(`${this.baseUrl}/admin/login`,body)
  }

  // add product
  addProductApi(pname:any,description:any,price:any,image:any,rating:any,count:any){  //body:any
    const body={pname,description,price,image,rating,count}
    return this.http.post(`${this.baseUrl}/admin/add`,body) //body
  }

  // get all products
  getAllProducts(){
    return this.http.get(`${this.baseUrl}/admin/product-access`)
  }

// edit api
editProductApi(id:any,bodyData:any){
  return this.http.put(`${this.baseUrl}/product-update/${id}`,bodyData)
}

 //delete product api
 removeProduct(id:any){
  return this.http.delete('http://localhost:3000/product-delete/'+id)
}
}
