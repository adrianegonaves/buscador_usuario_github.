import styled from "styled-components";
export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  gap: 1em;
  border: 1px solid black;
  border-radius: 10px;
  width: 600px;
  background-color: #1b1726;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;
export const DivUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  /* border: 1px solid black; */
  background-color: #717171;
  width: 300px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    h2{
        color: #ffff;
        padding-bottom:1rem;
        padding-top:1rem;
    }
    h4{
        color: #ffff;
        padding-bottom:2rem;
        
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
