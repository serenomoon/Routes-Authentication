import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const LoginScreen = () => {

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {

    dispatch({
       type : types.login,
       payload: {
         name : 'Saulo'
       }
    })


    navigate('/marvel', {
      replace: true
    });
  }


  return (
    <div className='container mt-5'>

        <h1>Login</h1>
        <hr />

        <button 
          className='btn btn-primary'
          onClick={ handleLogin }
          >
            Login
        </button>

    </div>
  )
}