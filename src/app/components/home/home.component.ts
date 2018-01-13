import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,
        AfterContentChecked, AfterViewInit ,AfterViewChecked,
        OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <br>

  <app-css></app-css>
  <br>

  <p>
    Hola mundo desde app.component
  </p>
  <br>

  <app-clases></app-clases>
  <br>

  <p [appResaltado]="'#a6e3cf'">
    Hola Mundo
  </p>
  <br>

  <app-ng-switch></app-ng-switch>

  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("ngInInit");
  }

  ngOnChanges(){
    console.log("ngOnChanges");
  }

  ngDoCheck(){
    console.log("ngDoCheck");
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit");
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy");
  }

}
