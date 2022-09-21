import styled from 'styled-components'

export const Container = styled.div`
  margin: 80px 3%;
  position: absolute;
  width: 92%;
`

export const H1 = styled.h1`
  min-height: 100px;
  width: 92%;
  margin: 0;
  color: white;
  padding: 10px;
  border-radius: 10px;
  background: #f27474;
`

export const Time = styled.p`
  color: white;
  font-size: 10px;
  text-transform: uppercase;

  @media screen and (min-width: 700px) {
    font-size: 14px;
  }
`
