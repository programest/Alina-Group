import React from 'react';
import classes from './MyInput.module.css';

const MyInput = ({ valid = '', ...props }) => {
	const inputClasses = `${classes.MyInput} ${classes[valid]}`;

	return <input type="text" className={inputClasses} {...props} />;
};

export default MyInput;