import React from 'react';
import SelectType from './SelectType';
import Input from './Input';
import SelectAlphabeticer from './SelectAlphabeticer';
import SelectScore from './SelectScore';
import SelectScoreHealth from './SelectScoreHealth';
import style from './Select.module.css';

const Search = () => {

    return (
        <>
            <Input />
            <p className={style.order}> Order For: </p>
            <li >
                <SelectType />
                <SelectAlphabeticer />
            </li>
            <li>
                <SelectScore />
                <SelectScoreHealth />
            </li>
        </>
    );
};

export default Search;