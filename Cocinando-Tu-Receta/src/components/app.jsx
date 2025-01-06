import { useState, useEffect } from 'react'
import Home from './Home'
import CreateRecipe from './CreateRecipe'
import RecipeHistory from './RecipeHistory'
import RecipeDetails from './RecipeDetails'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('home')
  const [recipes, setRecipes] = useState([])
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  useEffect(() => {
    const savedRecipes = localStorage.getItem('recipes')
    if (savedRecipes) {
      setRecipes(JSON.parse(savedRecipes))
    }
  }, [])

  const saveRecipe = (recipe) => {
    const updatedRecipes = [...recipes, recipe]
    setRecipes(updatedRecipes)
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes))
  }

  const deleteRecipe = (index) => {
    const updatedRecipes = recipes.filter((_, i) => i !== index)
    setRecipes(updatedRecipes)
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes))
  }

  const viewRecipeDetails = (recipe) => {
    setSelectedRecipe(recipe)
    setCurrentView('recipe-details')
  }

  return (
    <div className="app">
      <h1 className="main-title">Cocinando tu Receta</h1>
      {currentView === 'home' && (
        <Home 
          onCreateRecipe={() => setCurrentView('create-recipe')} 
          onViewHistory={() => setCurrentView('recipe-history')} 
        />
      )}
      {currentView === 'create-recipe' && (
        <CreateRecipe
          onSaveRecipe={(recipe) => {
            saveRecipe(recipe)
            setCurrentView('recipe-history')
          }}
          onCancel={() => setCurrentView('home')}
        />
      )}
      {currentView === 'recipe-history' && (
        <RecipeHistory 
          recipes={recipes} 
          onBack={() => setCurrentView('home')} 
          onDeleteRecipe={deleteRecipe}
          onViewRecipe={viewRecipeDetails}
        />
      )}
      {currentView === 'recipe-details' && selectedRecipe && (
        <RecipeDetails 
          recipe={selectedRecipe} 
          onBack={() => setCurrentView('recipe-history')}
        />
      )}
    </div>
  )
}

export default App