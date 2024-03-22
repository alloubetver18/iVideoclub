import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculasAPIService {
  APIep = 'http://gbrain.dlsi.ua.es/videoclub/api/v1/catalog';
  constructor(private _http: HttpClient) { }

  getPeliculas(){
    return this._http.get(this.APIep);
  }

  getPelicula(id: any) {
    return this._http.get(this.APIep + '/' + id);
  }
}
