import {Component} from '@angular/core';
import {Dish} from "../dish";
import {DISHES} from "../mock-dishes";
import  {DishService} from "../dish.service";

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent {
  dishes: Dish[] = [];
  selectedDish?: Dish;

  constructor(private dishService: DishService) {
  }

  ngOnInit(): void {
    this.getDishes();
  }

  onSelect(dish: Dish): void {
    this.selectedDish = dish;
  }

  getDishes(): void {
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes);
  }
}
