import React from 'react';
import SelectType from './SelectType';
import SelectAlphabeticer from './SelectAlphabeticer';
import SelectScore from './SelectScore';
import SelectScoreHealth from './SelectScoreHealth';
import style from './Select.module.css';

const Filtrer = () => {

    return (
        <div className={style.filtrer}>
            <p className={style.order}> Order For: </p>
            <SelectType />
            <SelectAlphabeticer />
            <SelectScore />
            <SelectScoreHealth />
        </div>
    );
};

export default Filtrer;