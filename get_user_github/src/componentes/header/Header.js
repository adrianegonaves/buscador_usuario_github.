import React from 'react'
import { AiOutlineGithub } from "react-icons/ai"
import { DivContainer, DivIcons, H1Title } from './StyledHeader'

 const Header = () => {
  return (
    <DivContainer>
        <DivIcons>
            <AiOutlineGithub/>
        </DivIcons>
        <div>
            <H1Title>Buscar usuário no GitHub</H1Title>
        </div>
    </DivContainer>
  )
}

export default Header
