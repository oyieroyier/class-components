import React, { Component } from 'react';

export class State extends Component {
	// const [goOut, setGoOut] = React.useState(second)

	state = {
		goOut: 'Yes',
	};

	toggleGoOut() {
		setGoOut((prevState) => {
			return prevState === 'Yes' ? 'No' : 'Yes';
		});
	}
	render() {
		return (
			<div className="state">
				<h1 className="state--title">Should I go out tonight?</h1>
				<div className="state--value" onClick={this.toggleGoOut}>
					<h1>{this.state.goOut}</h1>
				</div>
			</div>
		);
	}
}

export default State;
