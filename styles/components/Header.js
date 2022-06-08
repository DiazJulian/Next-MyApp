import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    padding-top: 60px;
    height: 300px;
    width: 100%;
    text-align: center;
    background: #add8e6;
    border-radius: 10px 10px 70px 0;

    @media screen and (min-width: 500px) {
        height: 250px;
    }

    @media screen and (min-width: 800px) {
        height: 350px;
    }
`
export const H1 = styled.h1`
    width: 40%;
    color: white;
    font-size: 18px;
`

export const Design1 = styled.div`
    width: 100%;
    height: 100px;
    background: #add8e6;
    position: relative;
    border: transparent;
    z-index: -100;
`

export const Design2 = styled.div`
    width: 100%;
    height: 100px;
    background: #003c6a;
    z-index: -99;
    position: relative;
    top: -100px;
    border: transparent;
    border-radius: 100px 0 0 0;
`
