import React from 'react';
import Search from '../Search';
import { Link } from 'react-router-dom';
import style from './index.module.css';
import cooking from '../../assets/cooking.png'

export function Nav() {
  return (
    <div className={style.nav}>
      <Link className={style.link} to='/food/home'>
        <img className={style.cooking} src={cooking} />
        <span>
          Food App
        </span>
      </Link>
      <Link className={style.link} to='/food/create'>
        <span>
          Create New Recipe
        </span>
      </Link>
      <Link className={style.link} to='/food/diets-types'>
        <span>
          View Diets
        </span>
      </Link>
      <Search />
    </div>
  );
};

export default Nav;