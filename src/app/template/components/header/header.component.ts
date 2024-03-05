import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, MatIconModule, MatTooltipModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  navOpened: boolean = false;
  @Output() openmodal = new EventEmitter<boolean>();
  @Output() openNavAction = new EventEmitter<boolean>();
  listItemsNavLinks = [{ name: 'Home', link: '' }, { name: 'Productos', link: 'products' }, { name: 'Nuestra historia', link: 'history' }, { name: 'Ubicación', link: 'ubicacion' }];
  hiddeNavLinks: boolean = false;

  constructor(private router: Router) {

  }

  navigate(url: string) {
    this.openNav();
    this.router.navigateByUrl(`/${url}`);
  }

  openModalSearchProduct() {
    this.openmodal.emit(true);
  }

  openNav() {
    this.navOpened = !this.navOpened;
    this.openNavAction.emit(this.navOpened);
    console.log(this.navOpened)
  }
}
