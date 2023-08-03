import { Injectable } from '@angular/core';
import { Dish } from './dish';
import {DISHES} from "./mock-dishes";
import {Observable, of} from "rxjs";
import {MessageService} from "./messages.service";

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private messageService: MessageService) { }

  getDishes(): Observable<Dish[]> {
    const dishes = of(DISHES);
    this.messageService.add('DishService')
    return dishes;
  }
}
