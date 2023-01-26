import React from 'react'
import Header from '../../componentes/header/Header';
import { DivContainer, DivImg, DivUser, Img } from './StyledHome';

 const HomePage = () => {
  return (

        <DivContainer>
            <div>
                <input placeholder= "enter a username"></input>
                <button type="button">search</button>
            </div>
            <DivUser>
                <DivImg>
                <img src="https://i.pinimg.com/564x/09/74/68/097468d86a2a606fff0d3bff073d6b1d.jpg"/>
                </DivImg>
                <h2>User name</h2>
                <h4>Status</h4>
            </DivUser>
        </DivContainer>
    
  )
}

export default HomePage;
