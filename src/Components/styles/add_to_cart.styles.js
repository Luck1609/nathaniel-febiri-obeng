import styled from "styled-components";
import { danger, media } from "./colors.styles";
import { Overlay } from "./navbar.styles";

const Modal = styled(Overlay)`
  top: 0;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: #fff;
  ${media.md} {
    width: 530px;
  }
  gap: 0;
  padding: 1pc;
  border-radius: 3px;
  position: relative;

  ul {
    padding-left: 0;

    li {
      list-style-type: none;
    }
  }

  img {
    margin: auto;
    ${media.md} {
      height: 250px !important;
      width: auto !important;
    }
  }
`;

const ErrorDisplay = styled.ul`
  li {
    font-size: 14px;
    color: ${danger};
    display: block;
    margin-right: 5px;
    padding: 3px;
    font-weight: 500;
  }
`;

const CartFooter = styled.div`
  width: 100%;
  ${media.md} {
    width: 60%;
  }
  margin: 20px auto 0 auto;
  display: flex;
  justify-content: space-between;

  button {
    width: 125px;
    ${media.md} {
      width: 150px;
    }

    &:first-child {
      margin-right: 10px;
      ${media.md} {
        margin-right: 0;
      }
    }
  }
`;

const NoProducts = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  font-size: 20px;
  font-weight: 500;
`;

export { Modal, ModalContainer, ErrorDisplay, CartFooter, NoProducts };
