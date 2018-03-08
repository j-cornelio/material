import React, { Component }     from 'react';
import Dialog   				from '../components/Dialog';
import FlatButton 				from '../components/FlatButton';

class DialogPage extends Component{
	state = { open: false }

	handleOpen = () => {
		this.setState( state => ({open : true}) )
	}

	handleClose = () => {
		this.setState( state => ({ open: false }) )
	}

	render(){
		const { open } = this.state;
		return (
			<div>
				<FlatButton label="open" onClick={this.handleOpen} />

		    	<Dialog title="Dialog With Actions" {...this.state} handleClose={this.handleClose}>
		    		<p>SUP</p>
		    	</Dialog>
		    </div>
		);	
	}
};//

export default DialogPage;