import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe }  from '../recipe';

// import { RecipesItemComponent }  from './recipes-item.component';


@Component({
  selector: 'rb-recipes-list',
  templateUrl: './recipes-list.component.html',
})
export class RecipesListComponent implements OnInit {
  recipies: Recipe[] = [ new Recipe('Dummy', 'Dummy', 'https://3.bp.blogspot.com/-aGbgkpfUnW4/VwNYT01zpTI/AAAAAAAACe4/-h4E8qgsxBkW9FUq5ZyEyskELj_HTEwfw/s1600/Pontirasa_Fried%2BNoodles%2B1.png',[]),
                        new Recipe('New Dummy', 'New Dummy', 'https://3.bp.blogspot.com/-aGbgkpfUnW4/VwNYT01zpTI/AAAAAAAACe4/-h4E8qgsxBkW9FUq5ZyEyskELj_HTEwfw/s1600/Pontirasa_Fried%2BNoodles%2B1.png',[])];

  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }
  ngOnInit() {
  }
  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
