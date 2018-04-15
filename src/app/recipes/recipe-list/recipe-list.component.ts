import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'Test', "https://prodimages.aisle.co/static+images/manual-notifications-logo.png"),
        new Recipe('A Test Recipe', 'Test', "https://prodimages.aisle.co/static+images/manual-notifications-logo.png")
    ];
    constructor() { }

    ngOnInit() {}

}
