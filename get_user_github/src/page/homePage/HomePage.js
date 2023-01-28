import React from "react";
import {
  Button,
  DivContainer,
  DivContainerInput,
  DivImg,
  DivText,
  DivUser,
  Img,
} from "./StyledHome";

const HomePage = () => {
  return (
    <DivContainer>
      <DivContainerInput>
        <input type="text" placeholder="enter a username ..."></input>
        <Button type="button">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          search
        </Button>
      </DivContainerInput>
      <DivUser>
        <DivImg>
          <img src="https://i.pinimg.com/564x/09/74/68/097468d86a2a606fff0d3bff073d6b1d.jpg" />
        </DivImg>
        <DivText>
          <h2>Adriane Almeida </h2>
          <h4>Front-End Developer </h4>
        </DivText>
      </DivUser>
    </DivContainer>
  );
};

export default HomePage;
