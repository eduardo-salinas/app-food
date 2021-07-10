import React from 'react';
import style from './RecipeDates.module.css';
import { validate } from './validate';

const RecipeDates = ({ setRecipe, setError, recipe, error }) => {

    const onChange = (e) => {
        setError(validate({
            ...recipe,
            [e.target.name]: e.target.value
        }));
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        });
    }
    return (
        <div className={style.recipeDate}>
            <label htmlFor="title">*Title:</label>
            <input
                type="text"
                placeholder="Title..."
                name="title"
                value={recipe.title}
                onChange={onChange}
            />
            {error.title && (
                <p className={style.error}>{error.title}</p>
            )} <br />
            <label htmlFor="summary">*Recipe summary:</label>
            <input
                type="text"
                placeholder="Recipe summary..."
                name="summary"
                value={recipe.summary}
                onChange={onChange}
            />
            {error.summary && (
                <p className={style.error}>{error.summary}</p>
            )} <br />
            <label htmlFor="score">Score: </label>
            <input
                type="text"
                id="score"
                placeholder="You can put a score..."
                name="score"
                value={recipe.score}
                onChange={onChange}
            />
            {error.score && (
                <p className={style.error}>{error.score}</p>
            )} <br />
            <label htmlFor="health-score">Health score: </label>
            <input
                type="text"
                id="health-score"
                name="healthScore"
                placeholder="You can put a score..."
                value={recipe.healthScore}
                onChange={onChange}
            />
            {error.healthScore && (
                <p className={style.error}>{error.healthScore}</p>
            )} <br />
            <label htmlFor="instructions">Instructions: </label>
            <textarea
                type="text"
                id="instructions"
                placeholder="How to make your recipe..."
                name="instructions"
                value={recipe.instructions}
                onChange={onChange}
            />
        </div>
    );
};

export default RecipeDates;