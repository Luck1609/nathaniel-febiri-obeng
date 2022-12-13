import React, { Component, forwardRef } from 'react'
import ClickAwayListener from './ClickAwayListener'

export default class CurrencyCoverter extends Component {
  render() {
    return (
      <ClickAwayListener 
        close={this.props.close(null)}
        content={
          forwardRef((props, ref) => <ul className="currency-converter" ref={ref}>
              {this.props.currencies
                .map(({ symbol, label }, index) => (
                  <li
                    className=""
                    key={index.toString()}
                    onClick={() => this.props.updateCurrency({ label, symbol })}
                  >
                    {symbol} {label}
                  </li>
                ))}
            </ul>
          )
        }
      />
    )
  }
}
