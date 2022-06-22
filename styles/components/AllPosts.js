import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  width: 100%;
  padding-top: 70px;
`

export const DivContainer = styled.div`
  display: flex;
`

export const Post = styled.div`
  width: 90%;
  height: 130px;
  padding: 5px;
  margin: 10px 5%;
  border-radius: 50px 15px;
  background: #3099bb;
  cursor: pointer;
  // background: #add8e6;

  @media screen and (min-width: 500px) {
    height: 180px;
  }

  @media screen and (min-width: 700px) {
  border-radius: 100px 20px;
  height: 250px;
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

  @media screen and (min-width: 700px) {
    height: 70px;
    width: 70px;
  }
`

export const Name = styled.h3`
  color: #003c6a;
  margin-left: 5px;
  
  @media screen and (min-width: 500px) {
    font-size: 20px;
  }

  @media screen and (min-width: 700px) {
    font-size: 35px;
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

  @media screen and (min-width: 700px) {
    font-size: 45px;
  }
`

export const Time = styled.p`
  color: #add8e6;
  font-size: 10px;
  text-transform: uppercase;
  position: absolute;
  display: block;
  right: 10%;
  margin-top: 5px;

  @media screen and (min-width: 500px) {
    font-size: 18px;
  }

  @media screen and (min-width: 500px) {
    margin-top: 15px;
  }
`

export const DivIcon = styled.div`
  display: grid;
  margin-left: -40px;
  gap: 8px;
  align-content: center;

  @media screen and (min-width: 700px) {
    margin-left: -70px;
  }
`

export const LikeIcon = styled.button`
  width: 35px;
  height: 50px;
  background: #ee0979;
  background: -webkit-linear-gradient(to right, #ff6a00, #ee0979);
  background: linear-gradient(to right, #ff6a00, #ee0979);
  color: white;
  padding: 5px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:disabled {
    cursor: no-drop;
    color: #d30067;
  }

  @media screen and (min-width: 500px) {
    width: 50px;
    height: 65px;
  }

  @media screen and (min-width: 700px) {
    width: 70px;
    height: 85px;
  }
`

export const CommentIcon = styled.button`
  width: 35px;
  height: 50px;
  color: white;
  background: #0052D4;
  background: -webkit-linear-gradient(to right, #6FB1FC, #4364F7, #0052D4);
  background: linear-gradient(to right, #6FB1FC, #4364F7, #0052D4);
  padding: 5px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  @media screen and (min-width: 500px) {
    width: 50px;
    height: 65px;
  }

  @media screen and (min-width: 700px) {
    width: 70px;
    height: 85px;
  }
`

export const FontAwesome = styled(FontAwesomeIcon)`
  height: 20px;

  @media screen and (min-width: 500px) {
    height: 30px;
  }

  @media screen and (min-width: 700px) {
    height: 40px;
  }
`

export const Number = styled.p`
  margin: 0;

  @media screen and (min-width: 700px) {
    font-size: 20px;
  }
`
