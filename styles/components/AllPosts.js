import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  width: 100%;
  padding-top: 30px;
`

export const DivContainer = styled.div`
  display: flex;
`

export const Post = styled.div`
  width: 90%;
  height: 130px;
  padding: 5px;
  margin: 10px 5%;
  border-radius: 50px 15px 50px 15px;
  background: #3099bb;
  cursor: pointer;
  // background: #add8e6;

  @media screen and (min-width: 500px) {
    height: 160px;
  }
`

export const ImgCtn = styled.div`
  display: flex;
  line-height: 0;
  `
  
  export const Img = styled.img`
  height: 40px;
  width: 40px;
  cursor: pointer;
  border-radius: 10px;
  
  @media screen and (min-width: 500px) {
    height: 50px;
    width: 50px;
  }
`

export const Name = styled.h3`
  color: #003c6a;
  margin-left: 5px;
  
  @media screen and (min-width: 500px) {
    font-size: 20px;
  }
`

export const Description = styled.p`
  margin: 8px;
  color: #003c6a;
  font-size: 20px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;

  @media screen and (min-width: 500px) {
    font-size: 30px;
  }
`

export const DivIcon = styled.div`
  display: grid;
  margin-left: -40px;
  gap: 8px;
  align-content: center;
`

export const LikeIcon = styled.i`
  width: 22px;
  height: 40px;
  background: #ee0979;
  background: -webkit-linear-gradient(to right, #ff6a00, #ee0979);
  background: linear-gradient(to right, #ff6a00, #ee0979);
  color: white;
  padding: 5px;
  border-radius: 10px;
`

export const CommentIcon = styled.i`
  width: 22px;
  height: 40px;
  color: white;
  background: #0052D4;
  background: -webkit-linear-gradient(to right, #6FB1FC, #4364F7, #0052D4);
  background: linear-gradient(to right, #6FB1FC, #4364F7, #0052D4);
  padding: 5px;
  border-radius: 10px;
`

export const FontAwesome = styled(FontAwesomeIcon)`
  height: 20px;
`