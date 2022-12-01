import React, { Component } from 'react'
import { img } from 'Assets/img/index'
import { success } from 'Components/styles/colors.styles'
import Button from 'Components/styles/Button'

export default class ProductDescription extends Component {
  render() {
    return (
      <div className="product-details-container">
        <div className="img-container">
          <ul className="img-list">
            <li className="img-list-item">
              <img src={img.sweater} alt="Apollo running short" className="img" />
            </li>
            <li className="img-list-item">
              <img src={img.sweater} alt="Apollo running short" className="img" />
            </li>
            <li className="img-list-item">
              <img src={img.sweater} alt="Apollo running short" className="img" />
            </li>
          </ul>

          <div className="hero-img">
            <img src={img.sweater} alt="" className="" />
          </div>
        </div>

        <div className="product-details-info">
          <div className="details">
            <div className="labels">
              <h3 className="">Apollo</h3>
              <label>Running Short</label>
            </div>

            <div className="sizes">
              <label>Size:</label>
              <ul>
                <li className="">XS</li>
                <li className="">S</li>
                <li className="">M</li>
                <li className="">L</li>
              </ul>
            </div>
            <div className="colors">
              <label>Color:</label>
              <ul>
                <li className="">S</li>
                <li className="">M</li>
              </ul>
            </div>

            <div className="price">
              <label>Price:</label>
              <span>$50.00</span>
            </div>


            <Button background={success} style={{ height: "43px", width: "292px"}}>
              Add to cart
            </Button>

            <p className="">Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.</p>
          </div>
        </div>
      </div>
    )
  }
}
