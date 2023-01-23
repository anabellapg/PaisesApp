import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit{

  pais!:Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService:PaisService
    ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=>this.paisService.getPaisPorAlpha(id)),
      tap(console.log) //eñ tap es una forma corta de hacer una impresión en consola y similares
    )
    .subscribe(pais=>this.pais=pais);
  }

}

/*Antes teníamos:
ngOnInit(): void {
    this.activatedRoute.params
    .subscribe(({id})=>{   ------------> recordemos que esto es desestructuracion de elementos
      this.paisService.getPaisPorAlpha(id)
      .subscribe(pais=>{
        console.log(pais);
      })
    })
  }

El método switchMap me permite resumir el subscribe dentro del subscribe para extraer el observable
dentro de un observable.

*/
