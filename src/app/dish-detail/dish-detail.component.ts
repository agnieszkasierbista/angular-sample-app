import {Component, Input} from '@angular/core';
import {Dish} from "../dish";

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent {
  @Input() dish?: Dish;
}
