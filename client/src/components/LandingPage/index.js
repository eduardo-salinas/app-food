import React from 'react';
import { Link } from 'react-router-dom';
import style from './index.module.css'

export function LandingPage() {
    return (
        <div className={style.page}>
            <div className={style.landing}>
                <h4 > FOOD APP </h4>
                <br />
                <p >
                    Welcome ! Find the best recipes according to your preferences or diet, add your favorite recipes and to share them with everyone!
               </p>
            </div >
            <Link to='/food/home' >
                <a className={style.btn}>
                    <div>
                        <span></span>
                    </div>
                    <p>START</p>
                </a>
            </Link>
        </div>
    );
};

export default LandingPage;