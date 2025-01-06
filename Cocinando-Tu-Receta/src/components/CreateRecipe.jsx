import React, { useState, useEffect } from 'react';
import IngredientList from './IngredientList';
import RecipeBuilder from './RecipeBuilder';
import RecipeSummary from './RecipeSummary';
import { searchIngredients } from '../services/foodService';
import './CreateRecipe.css';

export default function CreateRecipe({ onSaveRecipe, onCancel }) {
  const [recipeName, setRecipeName] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [nutritionScore, setNutritionScore] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const score = selectedIngredients.reduce((total, ingredient) => total + ingredient.nutritionValue * ingredient.quantity, 0);
    setNutritionScore(score);
  }, [selectedIngredients]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const fetchedIngredients = await searchIngredients(searchQuery);
      setIngredients(fetchedIngredients);
    } catch (error) {
      setError(`Error al buscar ingredientes: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveRecipe = () => {
    if (recipeName && selectedIngredients.length > 0) {
      onSaveRecipe({
        name: recipeName,
        ingredients: selectedIngredients,
        nutritionScore,
      });
    }
  };

  const handleAddIngredient = (ingredient) => {
    const existingIngredient = selectedIngredients.find(i => i.id === ingredient.id);
    if (existingIngredient) {
      setSelectedIngredients(selectedIngredients.map(i => 
        i.id === ingredient.id ? { ...i, quantity: i.quantity + 1 } : i
      ));
    } else {
      setSelectedIngredients([...selectedIngredients, { ...ingredient, quantity: 1 }]);
    }
  };

  return (
    <div className="create-recipe">
      <input
        type="text"
        placeholder="Nombre de la receta"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
        className="recipe-name-input"
      />
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar ingredientes"
          className="search-input"
        />
        <button type="submit" className="btn btn-primary">Buscar</button>
      </form>
      {isLoading && <p>Buscando ingredientes...</p>}
      {error && <p className="error-message">{error}</p>}
      <div className="recipe-content">
        <IngredientList ingredients={ingredients} onSelectIngredient={handleAddIngredient} />
        <RecipeBuilder
          ingredients={selectedIngredients}
          onUpdateIngredients={setSelectedIngredients}
        />
      </div>
      <RecipeSummary ingredients={selectedIngredients} nutritionScore={nutritionScore} />
      <div className="recipe-actions">
        <button onClick={handleSaveRecipe} disabled={!recipeName || selectedIngredients.length === 0} className="btn btn-primary">Guardar Receta</button>
        <button onClick={onCancel} className="btn btn-outline">Cancelar</button>
      </div>
    </div>
  );
}

