import React from 'react'
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

  const [{searchText}, handleInputChange, reset ] = useForm({
    searchText: ''
  });

  const heroesFiltered = getHeroesByName('Algo aqui');

  const handleSubmit = (e) => {

    e.preventDefault();

    if(searchText.trim().length <= 1){
        return;
    };
  
    console.log(searchText);

    reset();
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