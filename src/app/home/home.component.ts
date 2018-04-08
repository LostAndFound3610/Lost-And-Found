import { Component, OnInit } from '@angular/core';
import { IItem } from './item';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: IItem[] = []
  selectedItem: IItem;

  constructor(private _homeService: HomeService) { }

  ngOnInit() {
    this._homeService.getItems().subscribe(items => {
      this.items = items;
    },
      error => console.log(error)
    );
  }

  onSelect(item: IItem): void{
    this.selectedItem = item;
  }

}
