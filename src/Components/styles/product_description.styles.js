import styled from "styled-components";
import { Attributes } from "./cart_page.styles";
import { success } from "./colors.styles";

const Productcontainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 5pc;
  gap: 20px;
  margin-top: 5pc;

  .img-container {
    display: flex;
    flex-basis: 65%;
    gap: 30px;

    .img-list {
      padding: 0;
      margin: 0;
      height: 400px;
      overflow-y: scroll;

      li {
        list-style-type: none;

        .img {
          width: 79px;
        }

        &.active {
          border: 2px solid ${success};
        }
      }
    }

    .hero-img {
      max-width: 610px;
      position: relative;
      width: 100%;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
    }
  }

  .product-details-info {
    flex-basis: 35%;
    // background: cyan;

    .details {
      width: 292px;
      // background: turquoise;

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
