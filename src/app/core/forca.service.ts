import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_FORCA } from '../constants/api';
import { Forca } from '../models/forca';

@Injectable({
  providedIn: 'root'
})
export class ForcaService {

  constructor(private http: HttpClient) { }

  salvar(forca: Forca){
    return this.http.post(URL_FORCA,forca)
  }

  alterar(forca: Forca){
    return this.http.put(URL_FORCA,forca)
  }
  listar(): Observable<Forca[]>{
    return this.http.get<Forca[]>(URL_FORCA);
  }

  delete(id?:number){
    return this.http.delete(URL_FORCA + '/' + id);
  }
}
