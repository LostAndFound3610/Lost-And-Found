import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  users: User[] = [];
  matched_users: User[] = [];
  message: string = '';

  constructor(public signupService: SignupService) { }

  getUsers() {
    this.signupService.getUsers().subscribe(users => {
      this.users = users;
      //console.log(this.users);
    },
      error => console.log(error)
    );
    
  }

  ngOnInit() {
    this.message = ''
    this.getUsers();
  }

  match(in_email: string) {
    
    //console.log(this.items[1].type);
    let if_matched: boolean = false;
    let i = 0;
    while (i<=this.users.length) {
      try{
        let curr_email = this.users[i].emailaddr;
        let curr_pass = this.users[i].password;

        if (curr_email == in_email) {
          this.matched_users.push(this.users[i])
          console.log(this.matched_users)
          if_matched = true
        }

        throw new Error('type or build don\'t exist yet');
      }
      catch(e){
        console.log(e)
      }

      i++;

    }

    return if_matched
  }

  add_single_user(user: User) {
    this.signupService.addUser(user).subscribe(item => {
      this.users.push(user);
    },
      error => console.log(error)
    );
  }

  add(user_fname:string, user_lname:string, user_phone:string, user_email: string, user_pass: string): void {

    this.matched_users = [];

    let last_id = this.users[this.users.length-1].id

    let push_user = {
      id: last_id + 1,
      username: user_fname + ' ' + user_lname,
      emailaddr: user_email,
      phonenum: user_phone,
      password: user_pass
    }

    console.log(user_email);

    let if_matched = this.match(user_email);
    console.log(if_matched);

    if(!if_matched) {
      this.add_single_user(push_user)
      this.message = 'You have signed up';
    }else{
      this.message = 'email already exists';
    }

    

  }

}
