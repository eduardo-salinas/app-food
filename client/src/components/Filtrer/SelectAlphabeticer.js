import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filtredForNameHihgToLow, filtredForNameLowToHigh } from '../../actions';
import style from './Select.module.css';

const SelectAlphabeticer = () => {

    const dispatch = useDispatch();

    const [alphabeticer, setAlphabeticer] = useState(0)

    const handleChange = (e) => {
        e.preventDefault();
        setAlphabeticer(parseInt(e.target.value));
        if (parseInt(e.target.value) === 1) {
            dispatch(filtredForNameLowToHigh());
        } else if (parseInt(e.target.value) === 2) {
            dispatch(filtredForNameHihgToLow());
        };
        setTimeout(() => setAlphabeticer(0), 2000);
    };


    return (
        <select className={style.filtred} value={alphabeticer} name="select-alphabeticer" onChange={handleChange} defaultValue={0}>
            <option key={"select-alphabeticer 0"} value={0}>alphabetical order: </option>
            <option key={"select-alphabeticer 1"} value={1}>
                A - Z
            </option>
            <option key={"select-alphabeticer 2"} value={2}>
                Z - A
            </option>
        </select>
    );
};

export default SelectAlphabeticer;