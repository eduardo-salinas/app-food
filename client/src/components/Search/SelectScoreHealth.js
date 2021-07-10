import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filtredForScoreHealthHighToLow, filtredForScoreHealthLowToHigh } from '../../actions';
import style from './Select.module.css';

const SelectScoreHealth = () => {

    const dispatch = useDispatch();

    const [scoreHealth, setScoreHealth] = useState(0);

    const handleChange = (e) => {
        e.preventDefault();
        setScoreHealth(parseInt(e.target.value))
        if (parseInt(e.target.value) === 1) {
            dispatch(filtredForScoreHealthLowToHigh());
        } else if (parseInt(e.target.value) === 2) {
            dispatch(filtredForScoreHealthHighToLow());
        };
        setTimeout(() => setScoreHealth(0), 2000);
    };


    return (
        <select className={style.filtred} value={scoreHealth} name="select-scorehealth" onChange={handleChange} defaultValue={0}>
            <option key={"select-scorehealth 0"} value={0}> heatlh score order: </option>
            <option key={"select-scorehealth 1"} value={1}>
                lower to higher
            </option>
            <option key={"select-scorehealth 2"} value={2}>
                higher to lower
            </option>
        </select>
    );
};

export default SelectScoreHealth;