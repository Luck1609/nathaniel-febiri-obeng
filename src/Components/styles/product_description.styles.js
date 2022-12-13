import styled from "styled-components";
import { Attributes } from "./cart_page.styles";
import { media, success } from "./colors.styles";

const Productcontainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 5pc;
  gap: 20px;
  margin-top: 2pc;
  flex-direction: column;
  ${media.md} {
    margin-top: 5pc;
    flex-direction: row;
  }

  .img-container {
    display: flex;
    flex-basis: 100%;
    gap: 30px;
    flex-direction: column;
    ${media.md} {
      flex-basis: 65%;
      flex-direction: row;
    }

    .img-list {
      padding: 0;
      margin: 0;
      white-space: nowrap;
        overflow-x: scroll;
      ${media.md} {
        height: 400px;
        overflow-y: scroll;
          overflow-x: hidden;
      }

      li {
        list-style-type: none;
        display: inline-block;
        ${media.md} {
          display: block;
        }

        .img {
          width: 79px;
        }

        &.active {
          border: 2px solid ${success};
        }
        &:not(:last-child) {
          margin-right: 5px;
        }
      }
    }

    .hero-img {
      max-width: 610px;
      position: relative;
      width: 100%;

      img {
        position: relative;
        ${media.md} {
          position: absolute;
        }
        top: 0;
        left: 0;
        width: 100%;
      }
    }
  }

  .product-details-info {
    flex-basis: 100%;
    padding: 0 10px;

    ${media.md} {
      flex-basis: 35%;
    }

    .details {
      width: 100%;
      ${media.md} {
        width: 292px;
      }

      .labels {
        font-size: 30px;
        margin-bottom: 2pc;
      }

      h3 {
        font-weight: 600;
        margin: 5px 0;
      }

      .sizes,
      .price,
      .colors {
        margin-bottom: 24px;

        label {
          font-family: "roboto condensed";
          font-weight: bold;
          text-transform: uppercase;
          font-size: 18px;
          margin-bottom: 5px;
          display: block;
        }

        ul {
          margin: 0;
          padding: 0;
          display: flex;

          li {
            display: inline-flex;
            justify-content: center;
            align-items: center;
          }
        }

        span {
          font-weight: bolder;
          font-size: 24px;
          margin: 1pc 0;
        }
      }

      .sizes {
        ul {
          justify-content: space-between;

          li {
            width: 63px;
            height: 45px;
            border: 1px solid black;
          }
        }
      }

      .colors {
        ul {
          // justify-content: space-between;

          li {
            width: 36px;
            height: 36px;
            border: 1px solid black;
            margin-right: 10px;
          }
        }
      }

      p {
        font-size: 16px;
        font-family: "roboto";
        line-height: 26px;
        /* text-align: justify; */
      }
    }
  }
`;

const ProductAttributes = styled(Attributes)`
  ul {
    padding-left: 0;

    li {
      cursor: default;
    }
  }
`;

export { Productcontainer, ProductAttributes };
