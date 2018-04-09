import { Component, OnInit, Input } from '@angular/core';
import { Item } from './item';
import { HomeService } from './home.service';
import {Items} from './mock-items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  /*
  items = Items;
  selectedItem: Item;

  onSelect(item: Item): void {
    this.selectedItem = item;
  }

  constructor() { }

  ngOnInit() {
  }
  */
  
  
  items: Item[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.homeService.getItems()
    .subscribe(items => this.items = items);
  }

  add(item: Item): void {
    this.homeService.addItem(item).subscribe(item => {
      this.items.push(item);
    });
  }
  

}
