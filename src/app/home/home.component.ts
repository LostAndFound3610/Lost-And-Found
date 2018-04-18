import { Component, OnInit, Input } from '@angular/core';
import { Item } from './item';
import { HomeService } from './home.service';
//import { Items } from './mock-items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  items: Item[] = [];
  matched_items: Item[] = [];
  push_item: Item;
  selectedItem: Item;
  message: string = '';

  constructor(public homeService: HomeService) { }

  getItems() {
    this.homeService.getItems().subscribe(items => {
      this.items = items;
      //console.log(this.items);
    },
      error => console.log(error)
    );
    
  }

  ngOnInit() {
    this.message = '';
    this.getItems();
  }

  OnSelect(item: Item): void {
    this.selectedItem = item;
  }

  match(in_type: string, in_building: string) {
    
    //console.log(this.items[1].type);
    let if_matched: boolean = false;
    let i = 0;
    while (i<=this.items.length) {
      try{
        let curr_type = this.items[i].type;
        let curr_building = this.items[i].building;

        if (curr_type == in_type && curr_building == in_building) {
          this.matched_items.push(this.items[i])
          console.log(this.matched_items)
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

  add_single_item(item: Item) {
    this.homeService.addItem(item).subscribe(item => {
      this.items.push(item);
    },
      error => console.log(error)
    );
  }

  add(item_type: string, item_cate: string, item_building: string): void {

    this.matched_items = [];

    let last_id = this.items[this.items.length-1].id

    let push_item = {
      id: last_id+1,
      category: item_cate,
      type: item_type,
      school: null,
      building: item_building,
      owned_by_user: null
    }

    let if_matched = this.match(item_type, item_building);
    console.log(if_matched);

    if(!if_matched) {
      this.add_single_item(push_item)
      this.message = 'No matching items found, your item will be recorded';
    }else{
      this.message = 'Are you looking for the follwoing items?'
    }

    

  }

  
  

}
