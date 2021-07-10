import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDietTypes } from '../../actions/requests';
import style from './SelectDiet.module.css';
import { validateDiet } from './validate';

const SelectDiet = ({ diets, setDiets, setRecipe, setError, recipe, error }) => {
    const dispatch = useDispatch();
    const store = useSelector(state => state);

    useEffect(() => {
        dispatch(getDietTypes());
    }, [dispatch]);

    const componentVerific = () => {
        diets.component ? setDiets
            ({ ...diets, component: false })
            : setDiets({ ...diets, component: true })
    };

    const addNewRecipe = () => {
        setError(validateDiet(diets))
        if (error)
        setRecipe({ ...recipe, diet: [...recipe.diet, { title: diets.title, description: diets.description }] })
        alert("Successfully added")
        setDiets({ title: "", description: "", component: false })
    };
    const onChange = (e) => {
        setError(validateDiet({
            ...diets,
            [e.target.name]: e.target.value
        }));
        setDiets({
            ...diets,
            [e.target.name]: e.target.value
        });
    }
    return (
        <div className={style.dietSelector}>
            <button type="button" onClick={componentVerific}>ADD DIET</button><br />
            <div className={diets.component ? style.dietCreator : style.hiddenSelector}>
                <label htmlFor="title">*Diet title:</label><br />
                <input

                    key={"diet-title"}
                    type="text"
                    placeholder="Title..."
                    name="title"
                    value={diets.title}
                    onChange={onChange}
                /> {error.dietTitle && (
                    <p className={style.error}>{error.dietTitle}</p>
                )} <br />
                <label htmlFor="description">Diet description:</label><br />
                <textarea
                    key={"description"}
                    type="text"
                    placeholder="Diet description..."
                    name="description"
                    value={diets.description}
                    onChange={onChange}
                /><br />
                <button type="button" onClick={addNewRecipe}>Confirm</button>
            </div>
            <div className={style.diets}>
                {store.diets && store.diets.map((d, i) => (
                    <div>
                        <input
                            key={"type" + i}
                            type="checkbox"
                            name={d.title}
                            value={recipe.diet}
                            onChange={(e) => {
                                setRecipe({ ...recipe, diet: [...recipe.diet, { title: e.target.name }] })
                            }}
                        />
                        <label htmlFor={d.title}>{d.title}</label>
                    </div>))}
            </div>
            {error.diet && (
                <p className={style.error}>{error.diet}</p>
            )}
        </div>
    );
};

export default SelectDiet;