import React from 'react';
import './RecipeDetails.css';

export default function RecipeDetails({ recipe, onBack }) {
  if (!recipe) {
    return <div>No se encontró la receta</div>;
  }

  return (
    <div className="recipe-details">
      <h2>{recipe.name}</h2>
      <p>Puntaje Nutricional: <span className="highlight">{recipe.nutritionScore}</span></p>
      <h3>Ingredientes:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.name} - {ingredient.quantity} {ingredient.quantity > 1 ? 'unidades' : 'unidad'}
          </li>
        ))}
      </ul>
      <button onClick={onBack} className="btn btn-primary">Volver al Historial</button>
    </div>
  );
}