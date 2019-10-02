import { Component, OnInit } from '@angular/core';
import { MesaService } from 'src/app/servicios/mesa.service';
import { Mesa } from 'src/app/interfaces/mesa';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent implements OnInit {

  constructor(private ms: MesaService) { }
 
  ngOnInit() {
  }

  add() {
    let mesa: Mesa = {
      estado: false,
      nro: this.ms.index()+1,
      mozo:"juan",
      integrantes: 0
    }
    this.ms.add(mesa)
    console.log(this.ms.get())
  }

  cant() { console.log(this.ms.index()) }
}
