import React from 'react';
import { Link } from 'react-router-dom';



function RecipeList({ recipes, title }) {
  const noRecipesMsg = <h5>share your favourits baby meal Recipe here!</h5>;

  if (!recipes.length) {
    return noRecipesMsg;
  }

  const recipeCards = recipes.map(recipe => (
    <div key={recipe._id} className="card mb-3">
      
      <div className="card-body">
        <Link to={`/recipe/${recipe._id}`}>
          <p>{recipe.recipeText}</p>
        </Link>
      </div>
    </div>
  ));

  return (
    <div>
      <h3>{title}</h3>
      {recipeCards}
    </div>
  );
}

export default RecipeList;

