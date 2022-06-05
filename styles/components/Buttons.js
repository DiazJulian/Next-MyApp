import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  padding: 5px;
`

export const LikeIcon = styled.button`
  background: #ee0979;
  background: -webkit-linear-gradient(to right, #ff6a00, #ee0979);
  background: linear-gradient(to left, #ff6a00, #ee0979);
  color: white;
  padding: 5px;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  &:disabled {
    cursor: no-drop;
    color: #d30067;
  }
`

export const ViewIcon = styled.i`
  background: #0052D4;
  background: -webkit-linear-gradient(to right, #6FB1FC, #4364F7, #0052D4);
  background: linear-gradient(to right, #6FB1FC, #4364F7, #0052D4);
  color: white;
  padding: 5px;
  border-radius: 10px;
`

export const DeleteIcon = styled.i`
  color: white;
  background: red;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
`

export const FontAwesome = styled(FontAwesomeIcon)`
  height: 30px;
`