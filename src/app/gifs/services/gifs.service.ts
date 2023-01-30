import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];
  private ApiKey: string = "oV36L1K8qawbsiHDubcWeLlGml1x6Gaq";
  private urlServicio : string = 'https://api.giphy.com/v1/gifs';
  public resultados:Gif[] = [];
  get historial()
  {
    return [...this._historial];
  }

  constructor(private http:HttpClient ){
       this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
       this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
    

  }
  buscarGifs(query:string){

   query = query.trim().toLocaleLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,9);
       localStorage.setItem('historial',JSON.stringify(this._historial));
    }
const params = new HttpParams()
    .set('api_key','oV36L1K8qawbsiHDubcWeLlGml1x6Gaq')
    .set('limit','10')
    .set('q',query)



     this.http.get<GifsResponse>(`${ this.urlServicio}/search`,{params}).subscribe(data =>{
      console.log(data);
      this.resultados = data.data;
      localStorage.setItem('resultados',JSON.stringify(this.resultados));
    });

  }

}
