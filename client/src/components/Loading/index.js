import React from 'react';
import style from './index.module.css';
import BeatLoader from "react-spinners/BeatLoader";

export const Loading = () => {
    return (
        <div className={style.loading}>
            <h1> LOADING <BeatLoader size={20}/></h1>
        </div>
    );
};

export default Loading;