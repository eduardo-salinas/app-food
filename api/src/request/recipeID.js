require('dotenv').config();

const axios = require('axios').default;
const { API_KEY } = process.env;

//! con esta funcion capturamos los detalles especificos de una receta por id

const recipeId = async (id) => {
    try {

        const recipe = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
        const r = recipe.data;
        const recipeId = {
            id: r.id,
            title: r.title,
            score: r.spoonacularScore,      //puntaje           //
            healthScore: r.healthScore,     //puntaje de salud //-->number
            dishTypes: r.dishTypes,      //tiempo de cocion //
            img: r.image,
            summary: r.summary,
            instructions: r.instructions,
            diets: r.diets                   //array           
        };
        return recipeId;

    } catch (e) {
        return false;
    };
}


module.exports = recipeId;