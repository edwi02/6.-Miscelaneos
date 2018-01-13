import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
      Hola mundo... esta es una nueva etiqueta.
    </p>

    <button class="btn btn-primary" (click)="tamano = tamano + 5">
      <i class="fas fa-plus"></i>
    </button>

    <button class="btn btn-primary" (click)="reducir()">
      <i class="fas fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano:number = 25;

  constructor() { }

  ngOnInit() {
  }

  reducir(){
    if(this.tamano <= 12){
      return;
    }
    this.tamano = this.tamano - 5;
  }

}
