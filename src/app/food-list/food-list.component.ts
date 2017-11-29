import { Component, OnInit } from "@angular/core";
import { Food } from "../models/food.model";
import fooditems from "../foods";


@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.css"]
})
export class FoodListComponent implements OnInit {
  foodList: Food[];
  newFood: Food = new Food();
  pattern: string;
  display: boolean;
  displayList: boolean;
  todaysFoodList: Food[] = [];
  totalCalories: number;

  constructor() { }

  // -- START private methods //

  private updateCalories() {
    this.totalCalories = this.todaysFoodList.reduce((acc, el) => acc + el.calories, 0);
  }

  // -- END private methods //

  // -- START handle methods //

  handledisplayForm() {
    this.display = true;
  }

  handleAddNewItem() {
    this.foodList.push(this.newFood);
    this.display = false;
    this.newFood = new Food();
  }

  handleAddTodaysSpecial(item) {
    this.todaysFoodList.push(item);
    this.displayList = true;
    this.updateCalories();
  }

  // -- END handle methods //

  ngOnInit() {
    this.foodList = fooditems.map(data => new Food(data));
  }
}
