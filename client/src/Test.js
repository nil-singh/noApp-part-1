import React, { Component } from 'react'

export class Test extends Component {
  render() {
    return (
      <div>
        <ChildComponent name ="Nilesh" />


      </div>
    )
  }
}

const ChildComponent =   (props) => {
    return<p>
        {props.name}
    </p>
}

export default Test
