require('dotenv').config();

const axios = require('axios').default;
const { API_KEY1, API_KEY2, API_KEY3, API_KEY4, API_KEY5 } = process.env

let index = 1;
let apiKey;

const recipeId = async (id) => {
    switch (index) {
        case 1: apiKey = API_KEY1;
        case 2: apiKey = API_KEY2;
        case 3: apiKey = API_KEY3;
        case 4: apiKey = API_KEY4;
        case 5: apiKey = API_KEY5;
        default: apiKey = API_KEY1;
    }
    try {
        const recipe = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
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
        if (index >= 5) {
            index = 1;
        } else {
            index++
        }
        return false;
    };
}


module.exports = recipeId;