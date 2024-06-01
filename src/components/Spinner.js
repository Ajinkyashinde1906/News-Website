import React, { Component } from 'react'
import loading from "./loading.gif"

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center' >
        <img className='my-3' src={loading} alt="loading" style={{height:"35px",width:"35px"}}>
        </img>
      </div>
    )
  }
}