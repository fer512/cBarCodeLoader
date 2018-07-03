import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/product';
import { Family } from 'src/app/family';
import { Message } from 'primeng/components/common/message';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  product: Product;
  familiaSeleccionada: Family = null;
  products: Array<Product>;
  familias: Array<Family> = new Array<Family>();
  nombreFamilia = "";
  msgs: Message[] = [];

  constructor(private productService: ProductService, private messageService: MessageService) { }

  ngOnInit() {
  }

  search(event) {
    let query = event.query;
    this.productService.getProducts().then(products => {
      this.products = this.filtertProduct(query, products);
    });
  }

  disableFamily() {
    return this.nombreFamilia == null || this.nombreFamilia == "";
  }

  select(event) {
    this.addProduct(event);
  }

  filtertProduct(query, products: any[]): any[] {
    let filtered: any[] = [];
    for (let i = 0; i < products.length; i++) {
      let product = products[i];
      if ((product.code.toLowerCase().indexOf(query.toLowerCase()) == 0) || (product.description.toLowerCase().indexOf(query.toLowerCase()) == 0)) {
        filtered.push(product);
      }
    }
    return filtered;
  }

  addFamilia() {
    let f: Family = new Family();
    f.nombre = this.nombreFamilia;
    f.products = new Array<Product>();
    if (!this.yaExiste(f)){
      this.addOK();
      this.familias.push(f);
    }else{
      this.addError();
    }
      
  };

  yaExiste(f: Family): boolean {
    return this.familias.filter(
      function (e) {
        return e.nombre == f.nombre;
      }
    ).length > 0;
  };

  addProduct(p: Product) {
    this.familiaSeleccionada.products.push(p);
  };

  exportar() {
    //execute action
  }

  addOK() {
    this.messageService.add({ severity: 'success', summary: 'Nueva Familia', detail: 'Se agrego correctamente' });
  }

  addError() {
    this.messageService.add({ severity: 'error', summary: 'Nueva Familia', detail: 'Ya existe una Familia con ese nombre' });
  }

  clear() {
    this.messageService.clear();
  }
}
