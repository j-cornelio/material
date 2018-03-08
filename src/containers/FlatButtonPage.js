import React      		from 'react';
import FlatButton   	from '../components/FlatButton';

const FlatButtonPage = ({match}) => (
    <div>
    	<FlatButton label="Default" />
    	<FlatButton label="Primary" primary={true} />
    	<FlatButton label="Secondary" secondary={true} />
    </div>
)

export default FlatButtonPage;