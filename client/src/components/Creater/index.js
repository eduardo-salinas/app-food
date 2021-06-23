import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../../actions/requests';
import { MdSend } from 'react-icons/md'
import style from './index.module.css';
import SelectDiet from './SelectDiet';
import RecipeDates from './RecipeDates';
import { validate } from './validate';


export const Creater = () => {

    const [error, setError] = useState({});
    const [diets, setDiets] = useState({
        title: "",
        description: "",
        component: false
    })
    const [recipe, setRecipe] = useState({
        title: "",
        summary: "",
        score: 0,
        healthScore: 0,
        instructions: "",
        diet: []
    });


    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        setError(validate(recipe));
        e.preventDefault();
        let check=validate(recipe);
        if (check.hasOwnProperty("title") || check.hasOwnProperty("summary") || check.hasOwnProperty("score") || check.hasOwnProperty("healthScore")) {
            alert("the data is wrong")
        } else {
            dispatch(addRecipe(recipe));
            alert("successfully added");
            setRecipe({
                title: "",
                summary: "",
                score: 0,
                healthScore: 0,
                instructions: "",
                diet: []
            });
        };
    }

    return (
        <div className={style.creater}>
            <h2>Creating new recipe</h2>
            <form onSubmit={handleSubmit}>
                <RecipeDates key="recipe-dates"
                    setRecipe={setRecipe}
                    setError={setError}
                    error={error}
                    recipe={recipe} />
                <p>Select diet type or add new:</p>
                <SelectDiet key="select-diet"
                    setDiets={setDiets}
                    diets={diets}
                    setRecipe={setRecipe}
                    setError={setError}
                    recipe={recipe}
                    error={error} /><br />
                <button className={style.btn} type="submit">SEND <MdSend /></button><br />
            </form>
        </div>
    );
};

export default Creater;