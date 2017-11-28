import { Component, OnInit } from "@angular/core";
import foodList from "../foods";

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.css"]
})
export class FoodListComponent implements OnInit {
  foodList: object[];
  newFood = {
    name: null,
    calories: null,
    image: null,
    quantity: null
  };
  pattern: string;
  display = false;
  displayList = false;
  todaysFoodList: object[] = [];
  totalCalories = 0;

  constructor() { }

  displayForm() {
    this.display = true;
  }
  addItem() {
    foodList.push(this.newFood);
    this.display = false;
    this.newFood = {
      name: null,
      calories: null,
      image: null,
      quantity: null
    };
  }
  todaysFood(item) {
    this.todaysFoodList.push(item);
    this.displayList = true;
    this.todaysFoodList.forEach(el => {
      this.totalCalories += el["calories"];
    });
  }

  ngOnInit() {
    this.foodList = foodList;
  }
}
