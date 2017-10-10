import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes: Recipe[] =[
    new Recipe('A Test Recipe','This is simply a test',
    'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),
     new Recipe('Another Test Recipe','This is simply a test',
    'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }
onRecipeSelected(recipe:Recipe){
this.recipeWasSelected.emit(recipe);
}
}
