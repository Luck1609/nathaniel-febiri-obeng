import { textColor } from "./colors.styles";
const { createGlobalStyle } = require("styled-components");



export const GlobalStyles = createGlobalStyle`
  body {
    color: ${textColor};
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