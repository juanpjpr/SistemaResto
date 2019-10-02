import { Component, OnInit } from "@angular/core";
import { ProductoServiceService } from "src/app/servicios/producto-service.service";
import { Producto } from "src/app/interfaces/producto";

@Component({
  selector: "app-formulario-producto",
  templateUrl: "./formulario-producto.component.html",
  styleUrls: ["./formulario-producto.component.css"]
})
export class FormularioProductoComponent implements OnInit {
  constructor(private ps: ProductoServiceService) {}

  ngOnInit() {}
  crear(f) {
    let p: Producto = {
      id: this.ps.length,
      descripcion: f.value.descripcion,
      pu: f.value.pu
    };
    this.ps.length++;
    this.ps.add(p);
  }
}
