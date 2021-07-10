import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipesForName } from '../../actions/requests';
import { HiOutlineSearch } from 'react-icons/hi'
import style from './Input.module.css';

const Input = () => {
    const [recipe, setRecipe] = useState("");

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setRecipe(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getRecipesForName(recipe));
        setRecipe("");
    };

    return (
        <form className={style.input} onSubmit={handleSubmit} >
            <input
                type="search"
                placeholder="Search Recipe"
                value={recipe}
                onChange={handleChange}
            />
            <button type="submit"><HiOutlineSearch/></button>
        </form>
    );
};

export default Input;