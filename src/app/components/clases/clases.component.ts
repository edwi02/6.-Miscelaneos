import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html'
})
export class ClasesComponent implements OnInit {

  alerta:string = "alert-danger";
  loading:boolean;

  propiedades:Object = {
    danger: "true"
  }


  constructor() { }

  ngOnInit() {
  }

  changeColor(isDanger:boolean, alertCss:string)
  {
    //this.alerta = alertCss;
    this.propiedades = {
      danger: isDanger
    }
  }

  ejecutarProceso(){
    this.loading = true;
    console.log("Antes de 3 seg " + this.loading);
    setTimeout( ()=>
    {
      this.loading = false;
      console.log("Entra a los 3 seg " + this.loading);
    }
    , 3000 );


  }

}
