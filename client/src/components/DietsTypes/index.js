import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDietTypes } from '../../actions/requests';
import Diet from './Diet';
import style from './index.module.css';

export function DietsTypes() {
    const dispatch = useDispatch();
    const store = useSelector(state => state.diets)

    useEffect(() => {
        dispatch(getDietTypes());
    }, []);

    if (store) {
        return (
            <div className={style.dietsTypes}>
                {store.map((diet,i) =>
                    <Diet key={"diet"+i} diet={diet} />
                )}
            </div>
        );
    }
};

export default DietsTypes;