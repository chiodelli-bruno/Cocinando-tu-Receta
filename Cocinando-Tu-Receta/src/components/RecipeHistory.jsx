import React from 'react';
import RecipeCard from './RecipeCard';
import './RecipeHistory.css';


export default function RecipeHistory({ recipes, onBack, onDeleteRecipe, onViewRecipe }) {
  return (
    <div className="recipe-history">
      <h2>Tus Recetas Guardadas</h2>
      {recipes.length === 0 ? (
        <p className="empty-message">Aún no has guardado ninguna receta. ¡Empieza a cocinar!</p>
      ) : (
        <div className="recipe-grid">
          {recipes.map((recipe, index) => (
            <RecipeCard 
              key={index} 
              recipe={recipe} 
              onDelete={() => onDeleteRecipe(index)}
              onView={() => onViewRecipe(recipe)}
            />
          ))}
        </div>
      )}
      <button onClick={onBack} className="btn-back">Volver al Inicio</button>
    </div>
  );
}