import { Component, OnInit } from '@angular/core';
import { Item } from '../home/item';
import { HomeService } from '../home/home.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  items: Item[] = [];
  shown_items: Item[] = [];
  message: string = '';
  useremail: string = '';

  //login_c: LoginComponent;

  constructor( private homeService: HomeService) { }

  
  getItems() {
    this.homeService.getItems().subscribe(items => {
      this.items = items;
    },
      error => console.log(error)
    );
    
  }
  
  



  ngOnInit() {
    this.getItems();

    //this.useremail = this.log_c.login_email;
    //console.log(this.log_c.login_email);
  }

}
