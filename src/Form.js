import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Form extends Component {
	constructor(){
		super();
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	static propTypes = {
		addContact: PropTypes.func
	};

	state = {
		name: '',
		phone: ''
	};

	onChange(e){
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	onSubmit(e){
		e.preventDefault();
		this.props.addContact({
			...this.state
		});

		this.setState({
			name: '',
			phone: ''
		})
	}


	render() {
		return (
			<div className="border border-light" >
				<form  onSubmit={this.onSubmit} >
					<input
						name="name"
						id="name"
						value={this.state.name}
						onChange={this.onChange}
						className="border border-primary"
						placeholder="Enter a name"/>
					<br/>
					<input
						name="phone"
						id="phone"
						value={this.state.phone}
						onChange={this.onChange}
						className="border border-primary"
						placeholder="Enter a phone"/>

						
					<button className="btn btn-outline-primary"  >Add</button>

				</form>
			</div>
		);
	}
}

export default Form;