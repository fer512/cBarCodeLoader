import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any>('codigos-productos.json')
      .toPromise()
      .then(res => <Product[]>res.data)
      .then(data => { return data; });
  }
}
