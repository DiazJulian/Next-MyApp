import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// CommentContainer
export const Container = styled.div`
  width: 95%;
  background: #6e00ff;
  border-radius: 5px;
  padding: 5px;
`

export const H2 = styled.h2`
  color: white;
  margin-left: 5px;
  font-size: 18px;
  font-weight: bold;
`

export const Form = styled.form`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const UserImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin-right: 5px;

  @media screen and (min-width: 700px) {
    width: 40px;
    height: 40px;
  }
`

export const Textarea = styled.textarea`
  padding: 5px;
  width: 75%;
  color: white;
  border: none;
  border-radius: 5px;
  background: #003c6a;

  &::-webkit-scrollbar {
    display: none;
  }
  
  @media screen and (min-width: 700px) {
    width: 80%;
  }
`

export const Button = styled.button`
  background: none;
  border: none;
`

export const Icon = styled.i`
  color: #003c6a;
  background: none;
  cursor: pointer;
`

export const FontAwesome = styled(FontAwesomeIcon)`
  height: 20px;
`

// ListComments
export const ListContainer = styled.div`
  width: 100%;
`

export const CommentDiv = styled.div`
  width: 97%;
  background: #4b00ff;
  padding: 1%;
  border-radius: 5px;
  margin: 2px 1%;
`

export const User = styled.div`
  display: flex;
`

export const Image = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: 5px;
  
  @media screen and (min-width: 700px) {
    width: 40px;
    height: 40px;
  }
`

export const Name = styled.p`
  line-height: 0;
  color: white;
  margin-left: 3px;
  overflow-wrap: break-word;
  
  @media screen and (min-width: 700px) {
    font-size: 22px;
  }
`

export const Span = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Time = styled.p`
  color: #afafaf;
  font-size: 10px;
`

export const DeleteIcon = styled.i`
  color: red;
  background: none;
  cursor: pointer;
`

export const FontAwesomeDlt = styled(FontAwesomeIcon)`
  height: 12px;
`

export const Comment = styled.p`
  color: white;
  margin: 0;
  overflow-wrap: break-word;
  
  @media screen and (min-width: 700px) {
    font-size: 20px;
  }
`
