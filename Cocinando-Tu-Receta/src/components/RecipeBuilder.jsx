import React from 'react';
import './RecipeBuilder.css';

export default function RecipeBuilder({ ingredients, onUpdateIngredients }) {
  const handleQuantityChange = (id, newQuantity) => {
    const updatedIngredients = ingredients.map((ing) =>
      ing.id === id ? { ...ing, quantity: Math.max(1, newQuantity) } : ing
    );
    onUpdateIngredients(updatedIngredients);
  };

  const handleRemoveIngredient = (id) => {
    const updatedIngredients = ingredients.filter((ing) => ing.id !== id);
    onUpdateIngredients(updatedIngredients);
  };

  return (
    <div className="recipe-builder">
      <h2>Tu Receta</h2>
      {ingredients.length === 0 ? (
        <p className="empty-message">Selecciona ingredientes para tu receta</p>
      ) : (
        <ul className="selected-ingredients">
          {ingredients.map((ingredient) => (
            <li key={ingredient.id} className="selected-ingredient">
              <span>{ingredient.name}</span>
              <input
                type="number"
                min="1"
                value={ingredient.quantity}
                onChange={(e) => handleQuantityChange(ingredient.id, parseInt(e.target.value))}
                className="quantity-input"
              />
              <button onClick={() => handleRemoveIngredient(ingredient.id)} className="btn btn-danger">
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}



