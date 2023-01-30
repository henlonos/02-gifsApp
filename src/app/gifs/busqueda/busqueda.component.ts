import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {


@ViewChild('txtbuscar') txtbuscar!:ElementRef<HTMLInputElement>;

constructor(private gifsservice:GifsService){
  
}
buscar(event:any){
  const valor = this.txtbuscar.nativeElement.value;
  console.log(valor);
  if(valor.trim().length > 0)
  {
   
    this.gifsservice.buscarGifs(valor);
    this.txtbuscar.nativeElement.value = "";
  }

}
}
