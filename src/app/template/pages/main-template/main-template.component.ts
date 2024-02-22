import { Component, EventEmitter, Output } from '@angular/core';
import { FooterComponent, HeaderComponent, SidenavComponent } from '../../components';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-template',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SidenavComponent, RouterModule],
  templateUrl: './main-template.component.html',
  styleUrl: './main-template.component.css'
})
export class MainTemplateComponent {

  @Output() openModalSearchProduct = new EventEmitter<boolean>();


  getValueModalSearchProduct(event: boolean) {
    this.openModalSearchProduct.emit(event);

  }
}
