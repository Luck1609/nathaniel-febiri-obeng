import styled from "styled-components";
import { textColor, currencyHover, border, success, media } from "./colors.styles";

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
      cursor: pointer;
      ${media.md} {
        display: inline-flex;
      }
      
      .nav-link {
        margin: 8px 0;
        text-decoration: none;
        padding: 10px;
        padding-left: 40px;

        ${media.md} {
          padding-left: 0;
          padding: 1.8pc;
        }
      }
    }

  }
`

const PageLinksContainer = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  background: transparent;
  /* background: #00000054; */
  width: 100%;
  z-index: 10;
  transition: 0.3s;
  left: ${({ active }) => active ? "0" : "-100%"};
  
  ${media.md} {
    width: auto;
    position: relative;
    left: 0;
    border: none;
  }
`

const PageLinks = styled.ul`
  position: relative;
  height: 100%;
  background: #fff;
  border-right: 1px solid #eee;
  width: 200px;

  ${media.md} {
    width: auto;
    border: none;
  }
  z-index: 10;
  transition: 0.3s;
  margin: 0;



  li {
    display: block;

    .nav-link {
      display: block;
    }
  }
  
  ${media.md} {
    position: relative;
  }
`

const NavLogo = styled.li`
  margin-bottom: 20px;
  ${media.md} {
    display: none !important;
  }
  a {
    display: flex;
    align-items: center; 
    padding: 10px; 
    border-bottom: 1px solid #eee;
    position: relative;
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
  top: 0;
  width: 100%;
  height: 100%;
  background: #39374838;
  z-index: 50;
  display: flex;
  justify-content: flex-end;
  transition: .2s;

  ${media.md} {
    top: ${({ active }) => active ? "0" : "80px"};
  }
` 

const NavOpener = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-right: 5px;
    ${media.md} {
      display: none;
    }
  }
`

export {
  Navbar,
  LogoContainer,
  Overlay,
  NavActions,
  AppLoader,
  PageLinks,
  PageLinksContainer,
  NavLogo,
  NavOpener
}