import { createGlobalStyle } from 'styled-components'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
    margin: 0;
    padding: 10px;
    box-sizing: border-box;
    background: #c31432;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #240b36, #c31432);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #240b36, #c31432); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .slide-in {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: red;
    transform-origin: left;
  }

  .slide-out {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: orange;
    transform-origin: right;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navigation/>
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}