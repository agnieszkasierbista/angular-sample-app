import {Component} from '@angular/core';
import {Dish} from "../dish";

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent {
  dish: Dish = {
    id: 1,
    name: 'Gong Bao Ji Ding'
  };
}
