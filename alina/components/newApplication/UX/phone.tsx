import React, { useState, ChangeEvent, useEffect } from 'react';
import '../application.css';
import MyInput from '../UI/input/MyInput';
import Validation from './Validate';
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../appState';

import usePhoneMask from '../../../hooks/usePhoneMask';

const Phone: React.FC = () => {
	const dispatch = useDispatch()
	const PhoneNumber = useSelector((state: AppState) => state.logic.PHONE)
	const [valid, setValid] = useState<string>('');
	const [error, setError] = useState<string>('');
	const [value, setValue] = useState<string>('')
	useEffect(() => {
		dispatch({ type: 'PHONE', payload: value });
	}, [value])
	usePhoneMask({ setValue, value });



	return (
		<>
			<MyInput data-tel-input value={PhoneNumber} valid={valid} placeholder='+7(___)__-__-__' />
			<Validation value={value} setError={setError} setValid={setValid} mod='phone' />
			{error && <span style={{ border: 'none' }} className={valid}>{error}</span>}
		</>
	);
};

export default Phone;
