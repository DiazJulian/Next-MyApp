import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  border-radius: 90px 20px 90px 20px;
  width: 85%;
  padding: 10px;
  margin: 60px 3%;
  position: absolute;
  background: #3099bb;
`

export const ImageCnt = styled.div`
  display: flex;
  align-items: center;
  margin-top: -20px;
`

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`

export const LikeIcon = styled.i`
  position: absolute;
  left: 92%;
  bottom: 60%;
  background: orange;
  color: white;
  padding: 5px;
  border-radius: 10px;
`

export const DeleteIcon = styled.i`
  position: absolute;
  left: 92%;
  bottom: 5%;
  color: white;
  background: red;
  padding: 5px;
  border-radius: 10px;
`

export const FontAwesome = styled(FontAwesomeIcon)`
  height: 30px;
`