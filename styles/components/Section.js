import styled from 'styled-components'

export const SectionCtn = styled.section`
  width: 97%;
  margin-top: -160px;
  text-align: center;
  padding: 5px;

  @media screen and (min-width: 800px) and (orientation: portrait) {
    margin-top: -320px;
  }
`

export const H1 = styled.h1`
  font-size: 20px;
  color: white;

  @media screen and (min-width: 800px) and (orientation: portrait) {
    font-size: 30px;
  }
`

export const Button = styled.button`
  background: #7F00FF;
  background: -webkit-linear-gradient(to right, #E100FF, #7F00FF);
  background: linear-gradient(to right, #E100FF, #7F00FF);
  height: 40px;
  width: 100px;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 10px;

  @media screen and (min-width: 800px) and (orientation: portrait) {
    height: 70px;
    width: 170px;
    font-size: 22px;
}
`

export const Container = styled.div`
  width: 100%;
  padding: 30px 0;
  display: inline-flex;
  overflow-x: auto;
  overflow-y: hidden;
  justify-content: center;
`

export const UL = styled.ul`
  margin: 0;
  padding: 10px;
`

export const Img = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 10px;

  @media screen and (min-width: 800px) and (orientation: portrait) {
    height: 100px;
    width: 100px;
  }
`
