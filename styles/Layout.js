import styled from 'styled-components'

export const Layout = styled.div`
    padding: 0;
    margin: 0;
    border: 5px solid green;
    border-radius: 10px;
    width: 100%;
    height: 100vh;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 79% 19%;
`

export const Header = styled.header`
    height: 150px;
    width: 100%;
    border: 5px solid lightblue;
    border-radius: 10px;

    @media screen and (min-width: 500px) {
        height: 250px;
    }

    @media screen and (min-width: 800px) {
        height: 350px;
    }
`

export const Container = styled.div`
    height: 350px;
    width: 100%;
    border: 5px solid gray;
    border-radius: 10px;
    grid-column: 1;
    margin-top: 10px;

    @media screen and (min-width: 500px) {
        height: 550px;
    }

`