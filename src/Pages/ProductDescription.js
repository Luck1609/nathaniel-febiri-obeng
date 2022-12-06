import React, { Component } from 'react'
import { success } from 'Components/styles/colors.styles'
import Button from 'Components/styles/Button'
import { withRouter } from 'Hooks/CustomHooks'
import { fetchProductDetails } from 'queries'
import { connect } from 'react-redux'
import { getActiveCurrency } from '../helper';
import { toggleCart } from 'Redux/cartReducer'
import { Productcontainer, ProductAttributes } from 'Components/styles/product_description.styles'



class ProductDescription extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      product: null,
      activeImg: 0,
      item: null
    }

    this.changeActiveImg = this.changeActiveImg.bind(this)
    this.showCart = this.showCart.bind(this)
  }

  componentDidMount() { 
    const fetchProduct = async () => {
      try {
        const { data } = await this.props.client.query({
          query: fetchProductDetails,
          variables: {id: this.props.location.state.id}
        })
        
        this.setState(prev => ({...prev, ...data}))
      } catch (err) {
      }
    }

    fetchProduct()
  }

  changeActiveImg = (index) => () => this.setState(prev => ({...prev, activeImg: index}));
  showCart = (item)  => () => this.props.dispatch(toggleCart(item))

  render() {

    // console.log('Description props', this.state.product)
    const { product } = this.state, { currency } = this.props

    return (
      <>
        {
          !product ? (<></>) : (
            <Productcontainer>
              <div className="img-container">
                <ul className="img-list">
                  {
                    product.gallery.map((img, index) => <li className={`${index === this.state.activeImg ? "active" : ""}`} key={index.toString()} onClick={this.changeActiveImg(index)}>
                      <img src={img} alt={product.name} className="img" />
                    </li>)
                  }
                </ul>

                <div className="hero-img">
                  <img src={product.gallery[this.state.activeImg]} alt="" className="" />
                </div>
              </div>

              <div className="product-details-info">
                <div className="details">
                  <div className="labels">
                    <h3 className="">{ product.brand }</h3>
                    <label>{ product.name }</label>
                  </div>

                  {
                    product.attributes.map(({name, items}) => (
                      <ProductAttributes className={name.toLowerCase()} key={name}>
                        <label>{name}:</label>
                        <ul>
                          {
                            items.map(({displayValue, value}, index) => <li className="" key={index.toString()}>{name === 'Color' ? (<span style={{background: displayValue}}></span>) : displayValue}</li>)
                          }
                        </ul>
                      </ProductAttributes>
                    ))
                  }

                  <div className="price">
                    <label>Price:</label>
                    <span>{currency?.symbol} { product?.prices[getActiveCurrency(product.prices, currency?.label)]?.amount }</span>
                  </div>


                  <Button background={success} height="43px" width="292px" onClick={this.showCart(product)}>
                    Add to cart
                  </Button>

                  <div dangerouslySetInnerHTML={{__html: product.description}} />
                </div>
              </div>
            </Productcontainer>
          )
        }
      </>
    )
  }
}


const mapStateToProps = (state) => ({ currency: state.appActions.activeCurrency })

export default connect(mapStateToProps)(withRouter(ProductDescription))