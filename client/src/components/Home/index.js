import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipesAll } from '../../actions/requests';
import { paginater } from '../../reducer/utils';
import Loading from '../Loading';
import Paginater from '../Paginater';
import Recipe from '../Recipe';
import style from './index.module.css';

const Home = () => {
    const dispatch = useDispatch();
    const store = useSelector(state => state)
    const [pag, setPag] = useState(1)
    const [page, setPage] = useState([]);

    const max = Math.ceil(store.recipes.length / 8) //calculo cuantas pag voy a necesitar

    useEffect(() => {
        dispatch(getRecipesAll());
    }, [dispatch]);


    useEffect(() => {
        setPage(paginater(store.recipes, pag));
    }, [pag, store]);

    return (
        <>
            {store.loading ? <Loading /> :
                (
                    <div className={style.recipes}>
                        <Paginater pag={pag} setPag={setPag} max={max} />
                        {store.recipes.length > 0 ?
                            page && page.map(recipe => <Recipe
                                key={`recipe-${recipe.id}`}
                                id={recipe.id}
                                title={recipe.title}
                                score={recipe.score}
                                healthScore={recipe.healthScore}
                                img={recipe.img}
                                diets={recipe.diets}
                            />) :
                            <div className={style.notFound}>
                                <h1>Recipes not found</h1>
                                <button type="button" onClick={() => { dispatch(getRecipesAll()) }}>Return</button>
                            </div>}
                    </div>
                )}
        </>
    );
};

export default Home;