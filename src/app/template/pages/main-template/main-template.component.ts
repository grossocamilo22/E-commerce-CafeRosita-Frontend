import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FooterComponent, HeaderComponent, SearchComponent, SidenavComponent } from '../../components';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-template',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, SidenavComponent, RouterModule, SearchComponent],
  templateUrl: './main-template.component.html',
  styleUrl: './main-template.component.css'
})
export class MainTemplateComponent implements OnInit {

  navOpened: boolean = false;
  openModalSearchProduct: boolean = false;
  ngOnInit(): void {
    const modal = document.querySelector('.modal-window');
    modal?.addEventListener('click', (event: any) => {
      if (event.pageY > 520) {
        this.openModalSearchProduct = false;
      }
    })
    console.log(modal);
  }

}
