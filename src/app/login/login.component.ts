import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { User } from '../user';
import { AppRouterModule } from '../router.module';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[] = [];
  matched_user: User;
  login_email: string = '';

  constructor(public loginService: LoginService, private router:Router) { }

  getUsers() {
    this.loginService.getUsers().subscribe(users => {
      this.users = users;
      //console.log(this.users);
    },
      error => console.log(error)
    );
    
  }

  ngOnInit() {
    this.getUsers();
  }

  login_process(in_email: string, in_pass: string) {
    let if_matched: boolean = false;
    let i = 0;

    while (i<=this.users.length) {
      try{
        let curr_email = this.users[i].emailaddr;
        let curr_pass = this.users[i].password;

        if (curr_email === in_email && curr_pass === in_pass) {
          this.login_email = curr_email;
          this.router.navigateByUrl('browse');
        }

        //throw new Error('type or build don\'t exist yet');
      }
      catch(e){
        console.log(e)
      }
      i++;

    }

  }

}
