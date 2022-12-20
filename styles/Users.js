import styled from 'styled-components'

export const UL = styled.ul`
  margin: 0;
  display: flex;
`

export const Img = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 10px;
`

export const P = styled.p`
  color: orange;
  line-height: 0;
  font-size: 20px;
  margin-left: 5px;

`
export const Input = styled.input`
  display: block;
  background: none;
  margin: 20px auto;
  text-align: center;
  border: 2px solid orange;
  padding: 14px 10px;
  width: 190px;
  outline: none;
  color: white;
  border-radius: 24px;

  &:focus {
    width: 200px;
  }
`
