require('dotenv').config();

const axios = require('axios').default;
const { API_KEY } = process.env;


const recipeId = async (id) => {
    try {
        const recipe = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
        const r = recipe.data;
        const recipeId = {
            id: r.id,
            title: r.title,
            score: r.spoonacularScore,     
            healthScore: r.healthScore,     
            dishTypes: r.dishTypes,      
            img: r.image,
            summary: r.summary,
            instructions: r.instructions,
            diets: r.diets                          
        };
        return recipeId;

    } catch (e) {
        return false;
    };
}


module.exports = recipeId;