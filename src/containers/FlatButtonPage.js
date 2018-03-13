import React      		from 'react';
import FlatButton   	from '../components/FlatButton';
import RaisedButton   	from '../components/RaisedButton';

const FlatButtonPage = ({match}) => (
    <div>
    	<FlatButton label="Default" />
    	<FlatButton label="Primary" primary={true} />
    	<FlatButton label="Secondary" secondary={true} />
    	
    	<hr />

    	<RaisedButton label="Default" />
    	<RaisedButton label="Primary" primary={true} />
    	<RaisedButton label="Secondary" secondary={true} />
    </div>
)

export default FlatButtonPage;