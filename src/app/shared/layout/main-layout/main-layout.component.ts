import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements AfterViewInit{
@ViewChild('modal') modalRef!: ElementRef;

  constructor(private render:Renderer2){

  }
  ngAfterViewInit(): void {
    const modal = this.modalRef.nativeElement;
    //funcion para cerrar un modal dependiendo de un tamaño
    this.render.listen(modal,'click',(event:MouseEvent)=>{
      if (event.pageY > 520) {
        this.openModalSearchProduct = false;
      }
    })
  }

  navOpened: boolean = false;
  openModalSearchProduct: boolean = false;
  
}
