import { Component } from '@angular/core';
import { FooterComponent, HeaderComponent, SidenavComponent } from '../../components';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-template',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,SidenavComponent,RouterModule],
  templateUrl: './main-template.component.html',
  styleUrl: './main-template.component.css'
})
export class MainTemplateComponent {

}
