import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDietTypes, getRecipesAll, getRecipesForDiet } from '../../actions';
import style from './Select.module.css';

const SelectType = () => {

    const dispatch = useDispatch();
    const store = useSelector(state => state);
    const [type, setType] = useState("");

    useEffect(() => {
        dispatch(getDietTypes());
    }, [dispatch]);


    const handleChange = (e) => {
        e.preventDefault();
        setType(e.target.value)
        if (e.target.value === "All") {
            dispatch(getRecipesAll());
        } else {
            dispatch(getRecipesForDiet(e.target.value))
        };
        setTimeout(() => setType(""), 2000);
    };


    return (
        <select className={style.filtred} value={type} name="select-diet" onChange={handleChange} defaultValue="">
            <option key={0} value=""> select diet type: </option>
            <option key={1} value="All"> All </option>
            {store.diets.map((d, i) =>
                <option
                    key={"select-diet" + i}
                    value={d.title}
                >
                    {d.title}
                </option>)}
        </select>
    );
};

export default SelectType;