import React, { Component } from 'react'
import Button from '../Button'
import { danger, success } from '../colors.styles'

export default class RemoveFromCart extends Component {
  render() {
    return (
      <div className="remove-item">
        <p className="">Remove item from cart?</p>
        <div className="">
          <Button background={danger}  padding="8px" width="50px" onClick={() => alert('Yes')}>
            Yes
          </Button>
          <Button  background={success}   display="inline-block" padding="8px" width="50px" marginLeft="10px" onClick={() => alert('No')}>
            No
          </Button>
        </div>
      </div>
    )
  }
}
