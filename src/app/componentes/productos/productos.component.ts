import { Component, OnInit } from '@angular/core';
import { ProductoServiceService } from 'src/app/servicios/producto-service.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private ps: ProductoServiceService) { }

  ngOnInit() {
  }

  editar(i) {
    console.log(i);
  }

  eliminar(i) {
    this.ps.productos.splice(i, 1);
  }

}
