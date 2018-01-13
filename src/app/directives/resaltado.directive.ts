import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el:ElementRef) {
    console.log("Directiva llamda!!");
    this.el.nativeElement.style.padding = "8px";
    this.el.nativeElement.style.borderRadius = "8px";
  }

  @Input("appResaltado") nuevoColor:string;

  @HostListener('mouseenter') mouseEntra(){
    console.log("Entra");
    this.resaltar( this.nuevoColor );
  }

  @HostListener('mouseleave') mouseSale(){
    console.log("Sale");
    this.resaltar( null );
  }

  resaltar( color:string = "yellow"){
    this.el.nativeElement.style.backgroundColor = color;
  }


}
