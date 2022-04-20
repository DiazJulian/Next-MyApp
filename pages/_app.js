import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
    margin: 0;
    padding: 2%;
    box-sizing: border-box;
    background: #003c6a
    // background: #858aff;
    // rgb(88 84 255 / 90%)
    // background: #c31432;  /* fallback for old browsers */
    // background: -webkit-linear-gradient(to bottom, #240b36, #c31432);  /* Chrome 10-25, Safari 5.1-6 */
    // background: linear-gradient(to bottom, #240b36, #c31432); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  body::-webkit-scrollbar {
    width: 8px;
  }
  body::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: #858aff;
  }
  body::-webkit-scrollbar-track {
    border-radius: 4px;
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
    background: rgb(88 84 255 / 90%);
    transform-origin: right;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}