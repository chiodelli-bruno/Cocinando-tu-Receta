import React from 'react';
import './RecipeCard.css';

export default function RecipeCard({ recipe, onDelete, onView }) {
  return (
    <div className="recipe-card">
      <h3>{recipe.name}</h3>
      <p>Puntaje Nutricional: <span className="highlight">{recipe.nutritionScore}</span></p>
      <p>Ingredientes: {recipe.ingredients.length}</p>
      <div className="recipe-card-actions">
        <button onClick={onView} className="btn btn-primary">Ver Detalles</button>
        <button onClick={onDelete} className="btn btn-danger">Eliminar</button>
      </div>
    </div>
  );
}


