import React from 'react';
import style from './index.module.css';
import BeatLoader from "react-spinners/BeatLoader";

const Loading = () => {
    return (
        <div className={style.loading}>
            <BeatLoader size={30}/>
        </div>
    );
};

export default Loading;