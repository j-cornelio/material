import React from 'react';
import PropTypes from 'prop-types';

const RaisedButton = ({label, primary, secondary, disabled, onClick}) => {
		let myClass = '';

		switch(true){
		    case primary:
				myClass = 'primary';
			break;

		    case secondary:
				myClass = 'secondary';
			break;

			default:
				myClass = 'default'
		}
		return (
			<div className="buttonWrap">
				<button 
					onClick={onClick} 
					className={[myClass, 'raised'].join(' ')}
				>
					<span>{label}</span> 
				</button>
			</div>
		);	
};//
RaisedButton.propTypes = {
	label 	  : PropTypes.string,
	primary   : PropTypes.bool,
	secondary : PropTypes.bool,
	disabled  : PropTypes.bool
}

export default RaisedButton;