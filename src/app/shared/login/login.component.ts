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
    /*this.router.navigate(['/dashboard/main', {outlets: {dm: 'list'}}]);*/
    this.router.navigate(['/history/main', {outlets: {hm: 'list'}}]);
    /*this.router.navigate(['/dashboard/main']);*/
  }

}
