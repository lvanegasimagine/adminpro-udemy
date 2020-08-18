import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {


  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {
  }

  onChanges(newValues: number){

    // let elemHTML: any = document.getElementsByName('progreso')[0];

    if (newValues >= 100){
      this.progreso = 100;
    }else if (newValues <= 0){
      this.progreso = 0;
    }
    else{
      this.progreso = newValues;
    }

    // elemHTML.value = Number(this.progreso);
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);

    this.txtProgress.nativeElement.focus();
  }

  cambiarValor(valor){
    if (this.progreso > 100 && valor > 0){
      this.progreso = 100;
      return;

    }
    if (this.progreso <= 0 && valor < 0){
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;

    this.cambioValor.emit(this.progreso);
  }

}
