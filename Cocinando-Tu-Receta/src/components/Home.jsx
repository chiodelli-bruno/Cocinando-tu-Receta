import './Home.css'

export default function Home({ onCreateRecipe, onViewHistory }) {
  return (
    <div className="home">
      <p className="home-description">
        Bienvenido a Cocinando tu Receta. Crea tus propias recetas personalizadas y descubre su valor nutricional.
      </p>
      <div className="home-buttons">
        <button onClick={onCreateRecipe} className="btn btn-primary">Crear Receta</button>
        <button onClick={onViewHistory} className="btn btn-outline">Ver Historial</button>
      </div>
    </div>
  )
}

