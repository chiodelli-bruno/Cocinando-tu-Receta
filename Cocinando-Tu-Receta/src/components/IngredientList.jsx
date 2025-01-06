import React from 'react';
import './IngredientList.css';


export default function IngredientList({ ingredients, onSelectIngredient }) {
  return (
    <div className="ingredient-list">
      <h2>Ingredientes</h2>
      {ingredients.length === 0 ? (
        <p>No se encontraron ingredientes. Intenta buscar algo.</p>
      ) : (
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient.id} onClick={() => onSelectIngredient(ingredient)}>
              <span>{ingredient.name}</span>
              <span>{ingredient.category}</span>
              <span>{ingredient.nutritionValue} kcal/100g</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

