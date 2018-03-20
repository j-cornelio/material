import React      		from 'react';
import TextField   	from '../components/TextField';

const TextFieldPage = () => (
    <div>
    	<TextField hintText="hello" />	
    	<br />
    	<TextField 
    		hintText="hello" 
    		errorText="This field is required" />
    	<br />
    	<TextField hintText="hello"
    		errorText="This field is required" />
    	<br />
    	<TextField hintText="hello" />
    	<br />
    </div>
)

export default TextFieldPage;