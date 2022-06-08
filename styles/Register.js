import styled from 'styled-components'

export const Form = styled.form`
  background: #bc89ff;
  height: 500px;
  width: 260px;
  position: absolute;
  border-radius: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  @media screen and (max-height: 600px) and (orientation: landscape) {
    top: 80%;
  }

  @media screen and (min-width: 500px) and (orientation: portrait) {
    width: 350px;
    height: 600px;
  }

  @media screen and (min-width: 700px) and (orientation: portrait) {
    width: 550px;
    height: 820px;
  }
`

export const H1 = styled.h1`
  color: indigo;
  font-size: 22px;

  @media screen and (min-width: 500px) and (orientation: portrait) {
    font-size: 28px;
  }
`

export const ImageCnt = styled.div`
  margin: auto;
  width: 100px;
  height: 100px;
  border: 3px black solid;
  border-radius: 5px;
  margin-bottom: 5px;

  @media screen and (min-width: 500px) and (orientation: portrait) {
    width: 140px;
    height: 140px;
  }

  @media screen and (min-width: 700px) and (orientation: portrait) {
    width: 200px;
    height: 200px;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Label = styled.label`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 70%;
  height: 30px;
  color: white;
  border-radius: 10px;
  background-color: #4f3bd2;
  text-align: center;
  cursor: pointer;
  line-height: 2;

  @media screen and (min-width: 700px) and (orientation: portrait) {
    height: 55px;
    border-radius: 20px;
    font-size: 25px;
  }
`

export const Input = styled.input`
  display: block;
  background: none;
  margin: 20px auto;
  text-align: center;
  border: 2px solid indigo;
  padding: 14px 10px;
  width: 70%;
  outline: none;
  cursor: pointer;
  color: indigo;
  border-radius: 24px;

  &:focus {
    width: 80%;
  }

  @media screen and (min-width: 700px) and (orientation: portrait) {
    margin: 30px auto;
    height: 50px;
    border-radius: 40px;
    font-size: 28px;
  }
`

export const Button = styled.button`
  border: 0;
  display: block;
  background: indigo;
  margin: 20px auto;
  text-align: center;
  padding: 14px 10px;
  width: 68%;
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

  @media screen and (min-width: 700px) and (orientation: portrait) {
    height: 70px;
    font-size: 25px;
  }
`
