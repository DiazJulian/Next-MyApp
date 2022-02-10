import styled from "styled-components"

export const Form = styled.form`
  background: none;
  height: 500px;
  width: 260px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  @media screen and (min-height: 250px) and (orientation: landscape) {
    height: 300px;
    background: transparent;

  }
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
  color: orange;
  border-radius: 24px;

  &:focus {
  width: 200px;
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

`