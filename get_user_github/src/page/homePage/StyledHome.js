import styled from "styled-components";
export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  gap: 2em;
  border: 1px solid black;
  border-radius: 10px;
  width: 700px;
  height: 70vh;
  background-color: #161b22;
  /* box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px; */
`;
export const DivUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid #30363d;
  /* border: 1px solid black; */
  background-color: #010409;
  width: 300px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    :hover{
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    }
`;

export const DivText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    color: #ffff;
    padding-bottom: 1rem;
    padding-top: 1rem;
    width: 100%;
  }
  h4 {
    color: #ffff;
    padding-bottom: 2rem;
  }
`;

export const DivImg = styled.div`
  padding-top: 2rem;
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 4px solid #ffff;
  }
`;
export const DivContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  input {
    padding: 5px 12px;
    background-color: #010409;
    color: #f0f6fc;
    display: block;
    cursor: pointer;
    margin-bottom: 2rem;
    outline: none;
    border: 1px solid #30363d;
    width: 100%;
    font-size: 14px;
    /* overflow: visible; */
line-height: 20px;
transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
  }
`;

export const Button = styled.button`
  position: relative;
  display: inline-block;
  padding: 10px 21px;
  border-radius: 4px;
  color: #ffff;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  font-family: "Roboto", sans-serif;
  filter: hue-rotate(0deg);
  border: 2px solid #d2bdff;
  transition: all 0.1s linear;
  background-color: transparent;
  cursor: pointer;

  :hover {
    border: 1px solid transparent;
    span {
      position: absolute;
      display: block;

      &:nth-child(1) {
        filter: hue-rotate(0deg);
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(90deg, transparent);
        animation: animate1 1s linear infinite;
      }
      @keyframes animate1 {
        0% {
          left: -100%;
        }
        50%,
        100% {
          left: 100%;
        }
      }

      &:nth-child(2) {
        filter: hue-rotate(60deg);
        top: -100%;
        right: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(180deg, transparent, #3a86ff);
        animation: animate2 1s linear infinite;
        animation-delay: 0.25s;
      }

      @keyframes animate2 {
        0% {
          top: -100%;
        }
        50%,
        100% {
          top: 100%;
        }
      }
      &:nth-child(3) {
        filter: hue-rotate(120deg);
        bottom: 0;
        right: 0;
        width: 100%;

        background: linear-gradient(270deg, transparent, #3a86ff);
        animation: animate3 1s linear infinite;
        animation-delay: 0.5s;
      }
      @keyframes animate3 {
        0% {
          right: -100%;
          height: 3px;
        }
        50%,
        100% {
          height: 2px;
          right: 100%;
        }
      }

      &:nth-child(4) {
        filter: hue-rotate(300deg);
        bottom: -100%;
        left: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(360deg, transparent, #3a86ff);
        animation: animate4 1s linear infinite;
        animation-delay: 0.75s;
      }
      @keyframes animate4 {
        0% {
          bottom: -100%;
        }
        50%,
        100% {
          bottom: 100%;
        }
      }
    }
  }
`;
