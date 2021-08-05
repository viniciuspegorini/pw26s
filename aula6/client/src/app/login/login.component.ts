import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loginService.isAuthenticated.next(false);
  }

  login() {
    this.loginService.login(this.username, this.password).subscribe(e => {
      //window.location.href = '/';
      this.router.navigate(['/']);
    }, error => {
      console.error('Usuário e/ou senha incorreto(s)!');      
    });
  } 

}
