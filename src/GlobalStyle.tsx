import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

:root{
    --bg-body: #333333;
    --text-primary: #333333;
    --button-frame: #fafafa80;
    --edDev: #fafafa;
    
}

.light {
    --bg-body: #fafafa;
    --text-primary: #fafafa;
    --button-frame: #33333380;
    --edDev: #333333;
}

.dark {
    --bg-body: #333333;
    --text-primary: #333333;
    --button-frame: #fafafa80;
    --edDev: #fafafa;
}

.App {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--bg-body);
    transition-property: background-color;
    transition-duration: 1s;
    transition-timing-function: ease-in-out;
  }

  .buttonPanel {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 2rem;
  }
  
  button {
    width: 100px;
    height: 50px;
    font-size: 32px;
  }
  
  .splineScene {
    position: fixed;
    width: 100%;
    height: 100%;
  }

  .reactButtons {
    z-index: 10;
    position: fixed;
    width: fit-content;
    max-width: 600px;
    height: auto;
    padding: 2rem;
    margin: 2rem;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    background-color: var(--button-frame);
    transition-property: background-color;
    transition-duration: 1s;
    transition-timing-function: ease-in-out;
  }

  h3 {
    color: var(--text-primary);
    transition-property: color;
    transition-duration: 1s;
    transition-timing-function: ease-in-out;
  }

  .edDev {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    color: var(--edDev);
    transition-property: color;
    transition-duration: 1s;
    transition-timing-function: ease-in-out;
    margin: 50px;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 100;
    font-size: clamp(22px, 2vw, 28px);
    letter-spacing: clamp(3px, 0.45vw, 7px);
    line-height: 1.5;
    text-decoration: none;
  }

`

export default GlobalStyle;

