import { textColor } from "./colors.styles";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&family=Roboto+Condensed:wght@300;400;700&family=Roboto:wght@400;500;700&display=swap');
    color: ${textColor};
    font-family: 'Raleway', sans-serif;
    margin: 0;
    background: #fff;
  }

  a {
    text-decoration: none;
    color: ${textColor};
  }

  .block {
    display: block;
  }

  .flex {
    display: flex;
  }

  .flex-col {
    flex-direction: column;
  }

  .grow {
    flex-grow: 1;
  }

  .flex-row {
    flex-direction: row;
  }

  .grid {
    display: grid;
  }

  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .font-medium {
    font-weight: 500;
  }

  .font-semibold {
    font-weight: bold;
  }

  .font-bold {
    font-weight: bolder;
  }


  .container {
    max-width: 1206px;
    margin: auto;
  }

  button {
    border: none;
    text-transform: uppercase;
  }
  
  .remove-item {
    position: absolute;
    background: #3c4149ad;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    color: #fff;
    z-index: 1;
  }

  .counter {
    font-weight: 500;
    display: flex;
    flex-direction: column;

    span {
      flex-grow: 1;
      align-items: center;
      justify-content: center;
    }
  }

  
  .font-medium {
    font-weight: 500;
  }

  .font-semibold {
    font-weight: bold;
  }

  .font-bold {
    font-weight: bolder;
  }
`