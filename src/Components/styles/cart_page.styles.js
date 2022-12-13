import styled from "styled-components"
import { Btn } from "./Button"
import { media, success, textColor } from "./colors.styles"

const CartItem = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  font-size: large;
  position: relative;
  flex-direction: column;
  ${media.md} {
    flex-direction: row;
  }

  >label {
    font-size: 18px;
    margin-bottom: 1.5pc;
    padding: 8px;
  }
  

  .info {
    flex-grow: 1;
    h3 {
      margin: 0 5px 0 0;
      display: block;
      font-weight: normal;
    }
    
    >span {
      display: block;
      margin: 7px 0;
    }

    div {
      margin-bottom: 8px;

      label {
        margin-bottom: 4px;
        font-size: 14px;
        font-weight: 500;
      }
    }

    div {
      ul {
        li {
          border: 1px solid #000;
          padding: 3px 5px;
          font-size: 14px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          margin-right: 10px;
          cursor: pointer;
        }
        li.active {
          color: #fff;
          background: ${textColor};
        }
      }
      &.color {
        ul {
          display: flex;
          align-items: center;

          li {
            margin-right: 5px;
            border: none;
            padding: 0;
            span {
              width: 20px;
              display: block;
              height: 20px;
            }
          }
          li.active {
            border: 1px solid ${success};
            padding: 1px;
          }
        }
      }
    }

  }

  .nav-cart-actions {
    display: flex;
    flex-direction: column;
    ${media.md} {
      flex-direction: row;
    }

    .counter {
      margin-right: 8px;
      order: 2;
      ${media.md} {
        order: 1;
      }
    }
    img {
      width: 121px;
      margin: auto;
      order: 1;
    }
  }
`

const Attributes = styled.div`
  ul {
    li {
      border: 1px solid #000;
      padding: 5px 10px;
      font-size: 14px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      cursor: pointer;
    }
    li.active {
      color: #fff;
      background: ${textColor};
    }
  }

  &.color {
    ul {
      display: flex;
      align-items: center;

      li {
        margin-right: 5px;
        border: none;
        padding: 0;
        span {
          width: 20px;
          display: block;
          height: 20px;
        }
      }
      li.active {
        border: 1px solid ${success};
        padding: 1px;
      }
    }
  }
`


const CounterBtn = styled(Btn)`
  background: transparent;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${textColor};
  cursor: pointer;
`

export {
  CounterBtn,
  CartItem,
  Attributes
}