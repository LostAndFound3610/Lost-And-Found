import { Component, OnInit } from '@angular/core';
import { Item } from '../home/item';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  items: Item[] = [];
  message: string = '';

  constructor(public homeService: HomeService) { }

  getItems() {
    this.homeService.getItems().subscribe(items => {
      this.items = items;
    },
      error => console.log(error)
    );
    
  }

  ngOnInit() {
    this.getItems();
  }

}
