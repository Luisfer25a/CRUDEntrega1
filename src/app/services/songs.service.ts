import { Injectable } from '@angular/core';
import { Cancion } from '../models/Cancion';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor() { }
  obtenerLocalStorage(){
    var canciones = [];
    for (let x = 0;x<localStorage.length-1;x++){
      let clave = localStorage.key(x);
      canciones.push(JSON.parse(localStorage.getItem(clave)));
    }
    return canciones;
  }

  eliminarLocalStorage(llave:string){
    localStorage.removeItem(llave);
  }

  grabarLocalStorage(song: Cancion){
    localStorage.setItem(song.nombre, JSON.stringify(song));
  }
}
