import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CidadesService {

  httpOptions = {
    headers: new HttpHeaders({ 'x-bin-meta': 'false' })
  };
  
  constructor(private http: HttpClient) { }

    BuscarCidades(): Observable<object> {
      const dataUrl = 'https://api.jsonbin.io/v3/b/633dd6fa65b57a31e68c063a';
      return this.http.get(dataUrl, this.httpOptions);
    }
}
