import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html'
})
export class PaisTablaComponent {

  @Input() paises:Country[]=[];

  //recordemos: en este nuevo componente que hemos creado, queremos recibir un objeto
  //(los paises) del componente padre por-pais. Así que lo que tenemos que hacer es
          //1. En el componente padre, pasarlo como argumento en el <app->
          //2. En el componente hijo, avisar escribiendo @Input antes de la propiedad


}
