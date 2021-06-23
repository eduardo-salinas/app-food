import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  filtredForScoreHighToLow, filtredForScoreLowToHigh } from '../../actions';
import style from './Select.module.css';

export const SelectScore = () => {

    const dispatch = useDispatch();

    const [score,setScore]=useState(0);

    const handleChange= (e)=>{
        e.preventDefault();
        setScore(parseInt(e.target.value))
        if ( parseInt(e.target.value)===1) {
            dispatch(filtredForScoreLowToHigh());
        } else if (parseInt(e.target.value) === 2) {
            dispatch(filtredForScoreHighToLow());
        };
        setTimeout(()=>setScore(0), 2000);
    };


    return (
            <select className={style.filtred} value={score} name="select-score" onChange={handleChange} defaultValue={0}>
                <option key={"select-score 0"} value={0}>score order: </option>
                    <option key={"select-score 1"} value={1}>
                        lower to higher
                    </option>
                    <option key={"select-score 2"} value={2}>
                        higher to lower
                    </option>
            </select>
    );
};

export default SelectScore;