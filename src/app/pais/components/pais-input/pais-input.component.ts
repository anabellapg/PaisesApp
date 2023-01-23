import { Component, EventEmitter, Output, OnInit, Input} from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit{

  @Input() placeholder:string='';

  @Output() onEnter: EventEmitter<string>= new EventEmitter();
  @Output() onDebounce: EventEmitter<string>= new EventEmitter();
  
  termino: string='';

  debouncer: Subject<string>=new Subject();

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300))
    .subscribe(valor=>{
      this.onDebounce.emit(valor);
    })
  }

  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(){
    this.debouncer.next(this.termino);
    //efectivamente, el valor es la tecla que hemos presionado en el evento input (evento inputar algo en el cuadro)
  }
}

/* En este caso, como es un componente de input (aunque sea hijo), va a ser éste
quien emita al padre.

  1. En el componente hijo definimos el output (es más trabajoso que poner un input, pero sigue
    siendo copiar y pegar, cambiando el evento (onEnter) y el output (<string>))
  2. En el componente hijo activamos la emisión cuando se activa el buscar, que se produce cuando se
    produce el submit
  3. En el componente padre, dentro del <app->, escribimos el evento del output y lo que debemos hacer
    (en este caso, buscar) y lo que devuelve el Output se marca con $event
  4. Actualizamos el componente del padre para que la función buscar reciba el $event
*/

/* ¿Por qué la parafernalia de usar el subject y el debounce?
Como el subject es un observable, podemos usar los métodos de rxjs, que son muy útiles.
*/

/*Proceso debounce:
    1. El evento input escucha la tecla que hemos presionado
    2. El método teclaPresionada le envía esa tecla al ngOninit, que lo debouncea para que el evento no se emita
      hasta que no pasen 300 milisegundos desde la última tecla presionada
    3. El ngOnInit emite el valor al padre


  ¿Y por qué es necesario usar onInit, y no hacemos el debounce en tecla presionada?
  Pues no lo sé.

*/
