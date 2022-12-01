import { Overlay } from 'Components/Navbar'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from 'Redux/cartReducer'
import styled from 'styled-components'
import Button from '../Button'
import { danger, success } from '../colors.styles'
import Cart from '../NavCart/Cart'

const Modal = styled(Overlay)`
  top: 0;
  justify-content: center;
  align-items: center;
`

const ModalContainer = styled.div`
  background: #fff;
  width: 530px;
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
    height: 250px !important;
    width: auto !important
  }
`

const ErrorDisplay = styled.ul`
  li {
    font-size: 14px;
    color: ${danger};
    display: block;
    margin-right: 5px;
    padding: 3px;
    font-weight: 500;
  }
`

const CartFooter = styled.div`
  width: 60%;
  margin: 20px auto 0 auto;
  display: flex;
  justify-content: space-between;
`

class AddToCartModal extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      quantity: 1,
      cartErrors: []
    }

    this.updateState = this.updateState.bind(this)
    this.pushToCart = this.pushToCart.bind(this)
  }

  updateState(params) {
    this.setState(prev => ({
      ...prev, 
      ...params,
      cartErrors: []
    }))
  }

  pushToCart = () => {
    let errors = []
    this.props.item.attributes.map(({name}) => {
      if (!Object.keys(this.state).includes(name.toLowerCase())) {
        errors = [...errors, {name, message: `Select product ${name}`}]
      }
      return errors;
    })

    this.setState(prev => ({...prev, cartErrors: errors}))
    if (errors.length === 0 ) {
      const { cartErrors, ...state } = this.state;
      this.props.dispatch(addToCart({
        product: this.props.item,
        ...state
      }))
    }
  }

  render() {

    return (
      <Modal>
        <ModalContainer>
          <Cart update={this.updateState} item={this.props.item} state={this.state} />

          {
            this.state.cartErrors.length > 0 && (
              <ErrorDisplay>
                {
                  this.state.cartErrors.map(({message}, index) => <li key={index.toString()}>{message}</li>)
                }
              </ErrorDisplay>
            )
          }

          <CartFooter>
            <Button background={success} width="150px" onClick={this.pushToCart}>
              Add to Cart
            </Button>
            <Button 
              background={danger} width="150px" 
              disabled={this.state.size && !this.state.color && !this.state.quantity}
              onClick={this.props.showCart()}
            >
              Close
            </Button>
          </CartFooter>
        </ModalContainer>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(AddToCartModal)