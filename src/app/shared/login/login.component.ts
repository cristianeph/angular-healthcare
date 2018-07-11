import { Component, OnInit } from '@angular/core';
import {IUser} from '../../classes/interfaces/user.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: IUser;
  constructor(private router: Router) {
    this.user = {
      id: 0,
      user: '',
      password: '',
      lastnames: '',
      firstnames: '',
      email: ''
    };
  }

  ngOnInit() {
  }

  requestLogin() {
    /*this.router.navigate(['/dashboard/main', {outlets: {mainadmin: 'users'}}]);*/
    this.router.navigate(['/dashboard/main']);
  }

}
