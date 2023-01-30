import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  historiales:string[] = [];

  get historial(){
    
    return this.gifsservice.historial;
  }

  constructor(private gifsservice:GifsService)
  {

  }

  buscar(termino:string)
  {
    console.log(termino);
    this.gifsservice.buscarGifs(termino);
  }
}
