import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, MatIconModule, MatTooltipModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Output() openmodal = new EventEmitter<boolean>();
  listItemsNavLinks = [{ name: 'Home', link: '' }, { name: 'Productos', link: 'productos' }, { name: 'Historia', link: 'historia' }, { name: 'Ubicación', link: 'ubicacion' }];
  hiddeNavLinks: boolean = false;

  openModalSearchProduct(){
    this.openmodal.emit(true);
  }
}
