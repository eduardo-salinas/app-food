import React from 'react';
import style from './index.module.css';

export const Diet = ({diet}) => {
    return (
        <div className={style.diet}>
            <h1>{diet.title}</h1>
            <text>{diet.description}</text>
        </div>
    );
};

export default Diet;