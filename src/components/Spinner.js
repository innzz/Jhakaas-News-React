import React from 'react'
import loading from './loading.gif'

const Spinner = ()=>{
  let spinnerSize = {
      height: '60px',
      width: '60px'
  }
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" style={spinnerSize} />
      </div>
    )
}

export default Spinner
