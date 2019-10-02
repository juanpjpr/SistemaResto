import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';
@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {
productos: Producto[] = [];
length = 0;
  constructor() { }

  add(p: Producto) {
    this.productos.push(p);
  }

  show() {
    return this.productos;
  }
}

  
