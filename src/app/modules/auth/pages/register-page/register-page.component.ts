import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent implements OnInit{
  ngOnInit(): void {
  }
  
  showFormRegister:boolean = false;

  hiddeRegisterFormWithEmail(){
    this.showFormRegister = false;
  }

  
}
