declare let google:any;
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit{
  ngOnInit(): void {

    google.accounts.id.initialize({
      client_id: '717175353839-mt0la73so77omv917fbqrgef5304u7ed.apps.googleusercontent.com',
      callback: (resp:any)=>{
        console.log(resp);
      }
    });

    google.accounts.id.renderButton(document.getElementById('google-btn'),{
    theme:'filled-blue',
    size:'large',
    shape:'pill',
    })
  }
  


}
