export async function searchIngredients(query) {
  const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&json=1`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.products.map(product => ({
      id: product.code,
      name: product.product_name,
      category: product.categories_tags[0] || 'Uncategorized',
      nutritionValue: Math.round(product.nutriments['energy-kcal_100g'] || 0)
    }));
  } catch (error) {
    console.error("Error fetching ingredients:", error);
    throw error;
  }
}

