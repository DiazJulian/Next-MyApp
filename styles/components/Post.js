import styled from 'styled-components'

export const ContainerPost = styled.div`
  margin: 80px 3%;
  position: absolute;
  width: 92%;
`

export const UserPost = styled.div`
  border-radius: 90px 20px;
  padding: 10px;
  width: 90%;
  background: #3099bb;

  @media screen and (min-width: 700px) {
    height: 200px;
  }
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
  cursor: pointer;

  @media screen and (min-width: 700px) {
    width: 65px;
    height: 65px;
  }
`

export const Name = styled.h2`
  margin-left: 5px;
  color: #003c6a;
  cursor: pointer;

  @media screen and (min-width: 700px) {
    font-size: 28px;
  }
`

export const H3 = styled.h3`
  font-size: 20px;
  color: #003c6a;

  @media screen and (min-width: 700px) {
    font-size: 30px;
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
