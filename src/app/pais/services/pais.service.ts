import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  get httpParams(){
    return new HttpParams()
    .set('fields','name,capital,alpha2Code,flag,population,region,subregion,translations');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino:string): Observable<Country[]>{ 
    const url=`${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url,{params: this.httpParams});
  }

  buscarCapital(termino:string): Observable<Country[]>{ 
    const url=`${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url,{params: this.httpParams});
  }

  getPaisPorAlpha(id:string):Observable<Country[]>{ 
    const url=`${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url,{params: this.httpParams});
  }

  buscarRegion(region:string): Observable<Country[]>{  
    const url=`${this.apiUrl}/regionalbloc/${region}`;
    return this.http.get<Country[]>(url,{params: this.httpParams})
    .pipe(
      tap(console.log)
    );
  }
  
}

  /*
  si pusiéramos:

    return this.http.get(url)
    .pipe(
      catchError(err=>of([]))
    )

  el error ocurriría en consola, pero no se devolvería el msj de error,
  porque con este código lo estamos 'atrapando'.
  Habría que importar el Of de rxjs.

  */
 

