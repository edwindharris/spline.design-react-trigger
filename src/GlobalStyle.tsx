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
    --button-background: #fafafa;
    
}

.light {
    --bg-body: #fafafa;
    --text-primary: #fafafa;
    --button-frame: #33333380;
    --button-background: #333333;
    --edDev: #333333;
}

.dark {
    --bg-body: #333333;
    --text-primary: #333333;
    --button-frame: #fafafa80;
    --button-background: #fafafa;
    --edDev: #fafafa;
}

.App {
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--bg-body);
    transition: background-color 1s ease-in-out;
  }

  .reactControlContainer {
    z-index: 1;
    position: fixed;
    max-width: 600px;
    height: auto;
    padding: 2rem;
    margin: 2rem;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    background-color: var(--button-frame);
    transition: background-color 1s ease-in-out;
  }

  .reactButtonContainer {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin-top: 1rem;
    align-items: center;
  }
  
  button {
    width: 100px;
    height: 50px;
    font-size: 32px;
    color: var(--text-primary);
    background-color: var(--button-background);
    transition: all 1s ease-in-out;
  }
  
  .splineScene {
    position: fixed;
    width: 100%;
    height: 100%;
  }

  h3 {
    color: var(--text-primary);
    text-align: center;
    transition: color 1s ease-in-out;
  }

  .edDev {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    color: var(--edDev);
    transition: color 1s ease-in-out;
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

