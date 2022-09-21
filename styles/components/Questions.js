import styled from 'styled-components'

// Form
export const Form = styled.form`
  // position: absolute;
  background: blueviolet;
  text-align: center;
  margin: 60px 0%;
  width: 90%;
  padding: 5%;
  border-radius: 10px;
`

export const H3 = styled.h3`
  color: #ff00cc;
`
export const Textarea = styled.textarea`
  width: 80%;
  height: 70px;
  padding: 10px;
  margin: 0 8%;
  border-radius: 10px;
`

export const Button = styled.button`
  padding: 10px;
  background: #00ffe7;
  color: #7f00ff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

export const H4 = styled.h4`
  color: orange;
`

// Component
export const Section = styled.section`
  // position: absolute;
  width: 100%;
  margin-top: 100px;
`

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const Card = styled.div`
  min-height: 100px;
  padding: 10px;
  background: #cc00ff;
  margin: 10px 0;
  border-radius: 10px;
  cursor: pointer;

  @media screen and (min-width: 380px) {
    min-height: 130px;
  }

  @media screen and (min-width: 480px) {
    min-height: 150px;
  }

  @media screen and (min-width: 570px) {
    min-height: 180px;
  }

  @media screen and (min-width: 1000px) {
    min-height: 215px;
  }
`

export const CheckedCard = styled.div`
  display: grid;
  min-height: 100px;
  padding: 10px;
  background: #0066ff;
  margin: 10px 0;
  border-radius: 10px;
  cursor: pointer;
`

export const Number = styled.p`
  font-family: sans-serif;
  color: white;
`

export const QH3 = styled.h3`
  color: white;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;

  @media screen and (min-width: 480px) {
    font-size: 25px;
  }
`
