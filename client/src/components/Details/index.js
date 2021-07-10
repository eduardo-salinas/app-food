import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipesDetail } from '../../actions/requests';
import style from './index.module.css';
import notfound from '../../assets/notfound.png'
import Loading from '../Loading';

const Details=({ match }) => {

    const dispatch = useDispatch();
    const store = useSelector(state => state.recipes[0])
    const loading = useSelector(state => state.loading);
    const fixed = useRef(match.params.id);


    useEffect(() => {
        dispatch(getRecipesDetail(fixed.current));
    }, [dispatch]);

    if (store) {
        return (
            <>
                {loading ? <Loading /> :
                    (
                        <div className={style.recipe}>
                            <h1>{store.title}</h1>
                            {store.img ? <img src={store.img} alt="not found" /> : <img src={notfound} alt="not found" />}
                            <div className={style.score}>
                                <li>Score: {store.score}</li>
                                <li>Health Score: {store.healthScore}</li>
                                <li>Diet Types:
                                    {store.diets && store.diets.map(d => <text> {d},</text>
                                    )}
                                </li>
                            </div>
                            <div className={style.info}>
                                {store.dishTypes &&
                                    <React.Fragment>
                                        <p>Dish Types : </p>
                                        {store.dishTypes.map(type => <text>{type + ", "}</text>)}
                                    </React.Fragment>
                                }
                                <p>Summary : </p>
                                <text>{store.summary}</text>
                                {store.instructions &&
                                    <React.Fragment>
                                        <p>Instructions : </p>
                                        <text>{store.instructions}</text>
                                    </React.Fragment>
                                }
                            </div>
                        </div>
                    )}
            </>
        );
    }
};

export default Details;