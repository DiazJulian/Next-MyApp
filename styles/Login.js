import styled from "styled-components"

export const Form = styled.form`
  background: #add8e6;
  height: 300px;
  width: 260px;
  padding: 0 0 15px 0;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  @media screen and (min-height: 250px) and (orientation: landscape) {
    top: 55%;
    padding: 0;
  }

  @media screen and (min-height: 800px) {
    height: 400px;
    padding: 20px 20px;
  }

  @media screen and (min-height: 1000px) and (min-width: 800px) {
    height: 700px;
    width: 500px;
  }
`

export const H1 = styled.h1`
  color: indigo;

`

export const Input = styled.input`
  border: 0;
  display: block;
  background: none;
  margin: 20px auto;
  text-align: center;
  border: 2px solid indigo;
  padding: 14px 10px;
  width: 190px;
  outline: none;
  color: indigo;
  border-radius: 24px;

  &:focus {
    width: 200px;
  }

  @media screen and (min-height: 800px) {
    margin: 40px auto;
  }

  @media screen and (min-height: 1000px) and (min-width: 800px) {
    margin: 100px auto;
    width: 300px;
    height: 50px;
    font-size: 30px;
    border-radius: 60px;

    &:focus {
      width: 400px;
    }
  }
`

export const Button = styled.button`
  border: 0;
  display: block;
  background: indigo;
  margin: 20px auto;
  text-align: center;
  padding: 14px 10px;
  width: 200px;
  outline: none;
  color: white;
  border-radius: 24px;
  cursor: pointer;
  
  &:hover {
    background: #3498db;
  }

  &:disabled {
    cursor: no-drop;
    opacity: 0.5;
  }

  @media screen and (min-height: 1000px) and (min-width: 800px) {
    width: 300px;
    height: 70px;
    border-radius: 40px;
    font-size: 25px;
  }

`