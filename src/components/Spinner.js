import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
    spinnerSize = {
        height: '60px',
        width: '60px'
    }
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" style={this.spinnerSize} />
      </div>
    )
  }
}

export default Spinner
