import React from 'react';
import './RecipeSummary.css';

export default function RecipeSummary({ ingredients, nutritionScore }) {
  return (
    <div className="recipe-summary">
      <h2 className="text-2xl font-bold mb-4 text-green-800">Resumen de la Receta</h2>
      <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
        <p>Ingredientes: <span className="highlight">{ingredients.length}</span></p>
        <p>Puntaje Nutricional: <span className="highlight nutrition-score">{nutritionScore}</span></p>
        <ul className="summary-ingredients">
          {ingredients.map((ingredient) => (
            <li key={ingredient.id} className="summary-ingredient">
              <span>{ingredient.name}</span>
              <span className="quantity">{ingredient.quantity}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}