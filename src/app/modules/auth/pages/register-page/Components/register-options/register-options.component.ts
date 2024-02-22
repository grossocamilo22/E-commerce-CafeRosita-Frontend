import { Component, EventEmitter, OnInit, Output } from '@angular/core';
declare let google:any;
@Component({
  selector: 'app-register-options',
  standalone: true,
  imports: [],
  templateUrl: './register-options.component.html',
  styleUrl: './register-options.component.css'
})
export class RegisterOptionsComponent implements OnInit{

  @Output() showFormRegisterWithEmail = new EventEmitter<boolean>();

  ngOnInit(): void {

    google.accounts.id.initialize({
      client_id: '717175353839-mt0la73so77omv917fbqrgef5304u7ed.apps.googleusercontent.com',
      context: "signup",
      callback: (resp:any)=>{
        console.log(resp);
      }
    });

    google.accounts.id.renderButton(document.getElementById('google-btn'),{
    theme:'filled-blue',
    size:'large',
    shape:'pill',
    text: "signup_with",
    width: document.getElementById("register-google-btn")?.offsetWidth
    })

  }
   showRegisterFormWithEmailFuction() {
    this.showFormRegisterWithEmail.emit(true)
  }


}
