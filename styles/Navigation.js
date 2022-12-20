import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Nav = styled.nav`
    height: 60px;
    width: 100%;
    position: fixed;
    background: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 2;
`

export const Div = styled.div`
    display: flex;
    align-items: center;
    background: #7F00FF;
    background: -webkit-linear-gradient(to right, #E100FF, #7F00FF);
    background: linear-gradient(to right, #E100FF, #7F00FF);
    border-radius: 10px;
    padding: 5px;
    margin-right: 7px;
    
    @media screen and (min-width: 500px) {
        padding: 8px 5px;
    }
`

export const Icon = styled.i`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    cursor: pointer;
    color: #00dfff;
    padding: 0 5px;
    border-radius: 50%;
`

export const FontAwesome = styled(FontAwesomeIcon)`
    width: 20px;
    height: 20px;
`

export const A = styled.a`
    color: white;
    font-size: 12px;
    cursor: pointer;
    margin: 0 10px;
    
    @media screen and (min-width: 500px) {
        font-size: 14px;
    }
`

export const ProfileCnt = styled.div`
    line-height: 3;
    display: flex;
`

export const Profile = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 10px;
    cursor: pointer;
`

export const DisableProfile = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 10px;
    cursor: pointer;
`
