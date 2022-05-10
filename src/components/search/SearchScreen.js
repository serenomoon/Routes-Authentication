import React, { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../hero/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const [ { searchText }, handleInputChange ] = useForm({
    searchText: q,
  });

  const heroesFiltered = useMemo( () => getHeroesByName(q), [ q ] ) ;


  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${ searchText }`);

  }


  return (
    <>
        <h1>Search</h1>
        <hr />

        <div className='row'>

          <div className='col-5'>
            <h4>Buscar</h4>
            <hr />

              <form onSubmit={ handleSubmit }>
                <input 
                  type='text'
                  placeholder='Search Hero'
                  className='form-control'
                  name='searchText'
                  autoComplete='off'
                  value={ searchText }
                  onChange={ handleInputChange }
                />

                <button
                  className='btn btn-outline-primary mt-2'
                  type='submit'
                >
                  Search...
                </button>

              </form>

          </div>

          <div className='col-5'>
            <h4>Results</h4>
            <hr />

            {
              (q === '')
                ? <div className='alert alert-info animate__animated animate__fadeIn'>Search a Hero</div>
              : (heroesFiltered.length === 0)
                && <div className='alert alert-danger animate__animated animate__fadeIn'>No results for : {q}</div>
            }

            {
              heroesFiltered.map( hero => (
                <HeroCard 
                  key={hero.id}
                  {...hero}
                />
              ))
            }

          </div>

        </div>

        
    </>
  )
}