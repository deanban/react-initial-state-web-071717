// Component Code Goes Here
import React from 'react'

class Address extends React.Component{
	constructor(props){
		super(props)
		// this.props = props

		this.state = {
			fullAddress: `${this.props.street}, ${this.props.city}`
		}
	}

	render(){
		return (
			<div className = 'address'>
				{this.state.fullAddress}
				{/*this.props.street*/}
				</div>
			)
	}
}

export default Address