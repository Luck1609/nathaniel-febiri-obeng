import styled from "styled-components";
import { textColor, currencyHover, border, success } from "./colors.styles";

const Navbar = styled.nav`
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  
  ul {
    padding-left: 0;
    
    li {
      text-decoration: none;
      list-style-type: none;
      display: inline-flex;
      cursor: pointer;
      
      .nav-link {
        display: inline-flex;
        margin: 8px 0;
        padding: 1.8pc;
        text-decoration: none;
      }
    }

  }
  
`

const NavActions = styled.ul`
  display: flex;
  align-items: center;

  >li {
    font-size: 18px;
    padding: 1pc 1.5pc;
    display: flex;
    align-items: baseline;
    position: relative;

    >span {
      display: inline-block;
      margin-right: 10px;
    }

    .badge {
      font-size: 14px;
      color: #fff;
      background: ${textColor};
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      border-radius: 15px;
      top: 5px;
      right: 5px;
      position: absolute;
    }

    .currency-converter {
      position: absolute;
      background-color: #fff;
      width: 150px;
      top: 60px;
      right: -40px;
      z-index: 10;
      overflow: hidden;
      filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));

      li {
        display: inline-block;
        font-size: 18px;
        padding: 12px 1.5pc;
        width: 100%;
        font-weight: 500;

        &:hover {
          background: ${currencyHover};
          cursor: pointer;
        }
      }
    }
  }
`

const LogoContainer = styled.div`
  cursor: pointer;
`  

const AppLoader = styled.div`
  background: #ffffffb3;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 50;
  color: ${textColor};
  
  .loader {
    border: 5px solid ${border};
    border-top: 5px solid ${success};
    border-radius: 50%;
    width: 15px;
    height: 15px;
    animation: spin 1.8s linear infinite;
  }

  > div {
    align-items: center;

    span {
      display: inline-block;
      margin-left: 7px;
    }
  }


  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 80px;
  width: 100%;
  height: 100%;
  background: #39374838;
  z-index: 50;
  display: flex;
  justify-content: flex-end;
` 

export {
  Navbar,
  LogoContainer,
  Overlay,
  NavActions,
  AppLoader
}