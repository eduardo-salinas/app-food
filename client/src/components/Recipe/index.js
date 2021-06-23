import React from 'react';
import style from './index.module.css';
import { Link } from 'react-router-dom';
import notfound from '../../assets/notfound.png' 

export const Recipe = ({ id, title, score, healthScore, img, diets }) => {
    return (
        <div className={style.recipe}>
            <Link className={style.link} to={`/food/recipe/${id}`}>
                <h1 className={style.title}>{title}</h1>
            </Link>
            {img?<img src={img} alt="not found" />:<img src={notfound} alt="not found" />}
            <div className={style.score}>
                <li>Score: {score}</li>
                <li>Health Score: {healthScore}</li>
                <Link className={style.link} to={`/food/diets-types`}>
                    <li>Diet Types:
                        {diets && diets.map(d => <text> {d},</text>
                        )}
                    </li>
                </Link>
            </div>
        </div>
    );
};

export default Recipe;