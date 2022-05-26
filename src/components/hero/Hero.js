import { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesById'

const heroImages = require.context('../../assets', true);

export const Hero = () => {

  const { heroId } = useParams();

  const hero = useMemo( () => getHeroesById(heroId), [ heroId ] );

  const navigate = useNavigate();

  if(!hero){
    return <Navigate to='/'/>
  }

  const { superhero,publisher,alter_ego,first_appearance,characters } = hero;


  const handleReturn = () => {
    navigate ( -1 );
    }


  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img 
          src={ heroImages(`./${ heroId }.jpg`) }
          alt = { superhero }
          className='img-thumbnail animate__animated animate__fadeInLeft'
        />
      </div>
      <div className='col-8 animate__animated animate__fadeIn'>
        <h3>{ superhero }</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'> <b>Alter ego:</b> {alter_ego} </li>
          <li className='list-group-item'> <b>Publisher:</b> {publisher} </li>
          <li className='list-group-item'> <b>First appearance:</b> {first_appearance} </li>
        </ul>

        <h5 className='mt-3'>Characters</h5>
        <p>{ characters }</p>

        <button 
          className='btn btn-outline-info'
          onClick={ handleReturn }
        >
          Return  
        </button> 
      </div>
        
    </div>
  )
}
