import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../tarefa/tarefa';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  login: Login;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({      
      usuario: '',
      senha: '',
    });
  }

  logar(){
    this.login = Object.assign({}, this.login, this.loginForm.value);    
    if(this.login.usuario == "admin" && this.login.senha == "secret"){
      this.router.navigate(['/lista']);
    }
  }

}
