import { Injectable } from '@angular/core';
import { Mesa } from '../interfaces/mesa';


@Injectable({
  providedIn: 'root'
})
export class MesaService {
  mesas: Mesa[] = [];
  
  constructor() { }

  
  add(mesa : Mesa){
    this.mesas.push(mesa);
  }


  get(){
    return this.mesas;
  }

  index(){
    return this.mesas.length;
  }
}
