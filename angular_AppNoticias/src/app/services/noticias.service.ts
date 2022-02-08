import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  
  constructor(private http:HttpClient) { }

  getNoticias(parametro: any):Observable<any>{
    const url = `https://newsapi.org/v2/top-headlines?country=${parametro[0].pais}&category=${parametro[0].categoria}&apiKey=266a761c5a9c446b961ef7c538db3c4a`
    return this.http.get(url);
  }
}
