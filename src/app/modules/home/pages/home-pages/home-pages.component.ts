import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrl: './home-pages.component.css'
})
export class HomePagesComponent implements OnInit {
  openModalSearchProduct:boolean = false;
  constructor() {
  }
  ngOnInit(): void {
  
  }


}
