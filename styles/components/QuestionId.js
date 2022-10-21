import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  margin: 80px 3%;
  position: absolute;
  width: 92%;
`

export const H1 = styled.h1`
  min-height: 100px;
  width: 97%;
  margin: 0;
  color: white;
  padding: 30px 0;
  border-radius: 10px;
  background: #f27474;
  text-align: center;
  
  @media screen and (min-height: 700px) {
    min-height: 150px;
    font-size: 35px;
  }

  @media screen and (min-height: 900px) {
    min-height: 200px;
    font-size: 45px;
  }
`

export const Time = styled.p`
  color: white;
  font-size: 10px;
  text-transform: uppercase;

  @media screen and (min-width: 700px) {
    font-size: 14px;
  }
`

export const DivIcon = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
`

export const DeleteIcon = styled.i`
  color: red;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
`

export const FontAwesome = styled(FontAwesomeIcon)`
  height: 20px;
`
