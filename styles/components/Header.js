import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    padding-top: 30px;
    height: 300px;
    width: 100%;
    text-align: center;
    align-items: center;
    background: #add8e6;
    border-radius: 10px 10px 70px 0;

    @media screen and (min-width: 500px) {
        height: 290px;
    }

    @media screen and (min-width: 800px) and (orientation: portrait) {
        height: 600px;
    }
`
export const H1 = styled.h1`
    width: 40%;
    color: #4b00ff;
    font-size: 18px;

    @media screen and (min-width: 800px) and (orientation: portrait) {
        font-size: 40px;
    }
`

export const Design1 = styled.div`
    width: 100%;
    height: 100px;
    background: #add8e6;
    position: relative;
    border: transparent;
    z-index: -100;

    @media screen and (min-width: 800px) and (orientation: portrait) {
        height: 200px;
    }
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

    @media screen and (min-width: 800px) and (orientation: portrait) {
        height: 200px;
        top: -200px;
    }
`
