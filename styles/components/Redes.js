import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  width: 100%;
  display: flex;
`

export const Article = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 20px;
  margin-left: 10px;
  margin-right: 5px;
  overflow: auto;
  background: #ff00cc;
  background: -webkit-linear-gradient(to right, #333399, #ff00cc);
  background: linear-gradient(to right, #333399, #ff00cc);
  position: relative;
  border-radius: 8px;  
  padding: 5px;
  box-shadow: 5px 5px 10px 0 rgba(0,0,0,0.50),
              0 -2px 15px -10px rgba(255,255,255,0.8);

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 400px) {
    height: 30px;
    width: 70%;
    box-shadow: 5px 15px 15px 0 rgba(0,0,0,0.50),
                0 -5px 20px -15px rgba(255,255,255,0.8);
  }

  @media screen and (min-width: 540px) {
    height: 40px;
    width: 60%;
  }
  
  @media screen and (min-width: 650px) {
    height: 60px;
    width: 60%;
  }
  
  @media screen and (min-width: 850px) {
    width: 50%;
  }
  
  @media screen and (min-width: 1000px) {
    width: 40%;
  }
`

export const Form = styled.form`
  display: flex;
  width: 90%;
`

export const Button = styled.button`
  background: none;
  border: none;
  margin: 0 2px;
  padding: 0;
`

export const Input = styled.input`
  width: 95%;
  font-size: 9px;
  background: transparent;
  color: white;
  border-radius: 8px;
  border-color: darkviolet;

  @media screen and (min-width: 400px) {
    font-size: 12px;
  }

  @media screen and (min-width: 540px) {
    font-size: 16px;
  }
`

export const A = styled.a`
  color: white;
  text-decoration: none;
  font-size: 10px;

  @media screen and (min-width: 400px) {
    font-size: 15px;
  }

  @media screen and (min-width: 540px) {
    font-size: 17px;
  }

  @media screen and (min-width: 650px) {
    font-size: 22px;
  }
`

export const FontAwesome = styled(FontAwesomeIcon)`
  height: 12px;
  cursor: pointer;

  @media screen and (min-width: 400px) {
    height: 15px;
  }

  @media screen and (min-width: 540px) {
    height: 20px;
  }
`

export const CheckIcon = styled.button`
  color: #03ff03;
  background: none;
  border: none;
  margin-left: 2px;
  padding: 0;
`

export const TrashIcon = styled.button`
  color: red;
  background: none;
  border: none;
  margin: 0;
  padding: 0;
`
