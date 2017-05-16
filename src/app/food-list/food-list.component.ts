import { Component, OnInit } from '@angular/core';
import foodList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: Object[];
  newFood: Object = {};
  pattern: String;
  display = false;
  displayList = false;
  todaysFoodList: Array<Object> = [];
  totalCalories: Number = 0;

  constructor() { }

  ngOnInit() {
    this.foodList = foodList;
  }
  displayForm() {
    this.display = true;
  }
  addItem() {
    foodList.push(this.newFood);
    this.display = false;
  }
  todaysFood(item) {
    this.todaysFoodList.push(item);
    this.displayList = true;
    this.todaysFoodList.forEach(item => {
      this.totalCalories += item["calories"];
    })
  }
}
