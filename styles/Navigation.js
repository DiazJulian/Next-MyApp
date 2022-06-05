import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Nav = styled.nav`
    height: 50px;
    width: 100%;
    position: fixed;
    background: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Div = styled.div`
    display: flex;
    align-items: center;
`

export const Icon = styled.i`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    background: #ff00cc; 
    background: -webkit-linear-gradient(to right, #333399, #ff00cc);
    background: linear-gradient(to right, #333399, #ff00cc);
    cursor: pointer;
    color: #00dfff;
    padding: 5px;
    border-radius: 50%;
`

export const FontAwesome = styled(FontAwesomeIcon)`
    width: 20px;
    height: 20px;
`

export const A = styled.a`
    color: white;
    font-size: 10px;
    cursor: pointer;
    margin: 0 10px;
    
`

export const ProfileCnt = styled.div`
    line-height: 3;
    display: flex;
`

export const Profile = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 10px;
`