import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  height: 150px;
  width: 100%;
  justify-content: center;
  padding-top: 100px;
`

export const Image = styled.img`
  width: 40px;
  height: 40px;
  padding: 5px;
  border-radius: 10px;
`

export const Textarea = styled.textarea`
  width: 70%;
  color: #003c6a;
  background: #add8e6;
  font-size: 15px;
  border-radius: 8px;
  padding: 10px;
  border: none;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: #858aff;
  }
  &::-webkit-scrollbar-track {
    border-radius: 4px;
  }
`

export const Icon = styled.i`
  line-height: 3;
  color: lightblue;
  margin-left: 2px;
`

export const Button = styled.button`
  background: none;
  border: none;
`