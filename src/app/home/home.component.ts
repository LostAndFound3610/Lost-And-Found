import { Component, OnInit, Input } from '@angular/core';
import { Item } from './item';
import { HomeService } from './home.service';
import { Items } from './mock-items';

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
  
  
  items: Item[] = [];
  push_item: Item;
  selectedItem: Item;

  constructor(public homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getItems().subscribe(items => {
      this.items = items;
    },
      error => console.log(error)
    );
  }

  OnSelect(item: Item): void {
    this.selectedItem = item;
  }

  add(item_id: number, item_cate: string): void {
    let push_item = {
      id: item_id,
      category: item_cate,
      type: 'xxx',
      school: 'xxx',
      building: 'xxx',
      owned_by_user: null
    }

    this.homeService.addItem(push_item).subscribe(item => {
      this.items.push(item);
    },
      error => console.log(error)
    );
  }
  

}
