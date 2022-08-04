import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  margin-top: 10px;
  justify-content: space-around;
`

export const H3 = styled.h3`
  color: #c9dae1;
  border-radius: 10px;
  background: #7f00ff;
  padding: 5px;
  cursor: pointer;
`

export const Container = styled.div`
  width: 90%;
  padding: 5%;

  @media screen and (min-width: 700px) {
    display: flex;
  }
`

export const Card = styled.div`
  border-radius: 10px;
  padding: 5px;
  margin: 10px;
  height: 120px;
  cursor: pointer;
  text-align: initial;
  background: #00c6ff;
  background: -webkit-linear-gradient(to right, #00c6ff, #0072ff);
  background: linear-gradient(to right, #00c6ff, #0072ff);

  @media screen and (min-width: 700px) {
    width: 50%;
  }
`

export const Name = styled.h3`
  margin: 0;
  color: #4b00ff;
`

export const Description = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`
