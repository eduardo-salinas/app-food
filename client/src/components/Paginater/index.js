import React from 'react';
import style from './index.module.css';
import { GrCaretNext, GrCaretPrevious, GrChapterNext, GrChapterPrevious } from "react-icons/gr";

const Paginater = ({ pag, setPag, max }) => {

    return (
        <div className={style.paginater} >
            <button type="button" onClick={() => setPag(1)}><GrChapterPrevious /></button>
            <button type="button" onClick={() => pag === 1 ? setPag(pag) : setPag(parseInt(pag) - 1)}><GrCaretPrevious /></button>
            <text> {pag} </text>
            <button type="button" onClick={() => pag === max ? setPag(pag) : setPag(parseInt(pag) + 1)}><GrCaretNext /></button>
            <button type="button" onClick={() => setPag(max)}><GrChapterNext /></button>
        </div>

    );
};

export default Paginater;