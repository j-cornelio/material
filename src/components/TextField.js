import React from 'react';
import PropTypes from 'prop-types';

const parent = {
	    fontSize: '16px',
    lineHeight: '24px',
    width: '256px',
    height: '48px',
    display: 'inline-block',
    position: 'relative',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    fontFamily: 'Roboto, sans-serif',
    transition: 'height 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    cursor: 'auto'
}
const inputs = {
	padding: '0px',
    position: 'relative',
    width: '100%',
    border: 'none',
    outline: 'none',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: 'rgba(0, 0, 0, 0.87)',
    cursor: 'inherit',
    fontStyle: 'inherit',
    fontVariant: 'inherit',
    fontWeight: 'inherit',
    fontStretch: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    fontFamily: 'inherit',
    opacity: '1',
    //-webkit-tap-highlight-color: rgba(0, 0, 0, 0),
    height: '100%'
}

const TextField = ({hintText, errorText, id}) => {
    let a = '';

    let error = !!errorText ? <p className="required">{errorText}</p> : '';//
    let errorClass = errorText ? 'errorLine' : '';
    let inputError = errorText ? 'inputError' : '';

	return (
		<div style={parent}>
			<div className="inner"></div>
			<input 
                id={id}
                type="text"
                style={inputs}
                placeholder={hintText}
                onFocus={() => {
                    a.classList.add('expand');
                }}
                 onBlur={() => {
                    a.classList.remove('expand');
                }}
                className={inputError} 
            />

            {error}
			
            <div style={{display: 'block'}}>
				<hr aria-hidden="true" className={[errorClass, 'hr-field'].join(' ')} />
				<hr aria-hidden="true" ref={(input) => a = input } className="hr-field2" />

			</div>
		</div>
	);	
};//
TextField.propTypes = {
	hintText 	  : PropTypes.string,
}

export default TextField;