import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

export default class NotFound extends Component {
  render() {
    return (
      <Navigate to='/all'  />
    )
  }
}
