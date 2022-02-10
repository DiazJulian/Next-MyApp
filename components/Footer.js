import React from "react"
import { P, StyledFooter } from "../styles/Footer"

export default function Footer () {
  return(
    <StyledFooter>
      <div><P>My App</P></div>
      <div>
        <a>Instagram</a>
        <a>GitHub</a>
        <a>LinkedIn</a>
      </div>
    </StyledFooter>
  )
}