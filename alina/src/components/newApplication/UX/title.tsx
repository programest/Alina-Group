import React, { useState, ChangeEvent, useEffect } from 'react';
import '../application.css';
import MyInput from '../UI/input/MyInput';
import { useDispatch, useSelector } from 'react-redux'
import Validation from './Validate';
import { AppState } from '../appState';
const Title: React.FC = () => {

	const dispatch = useDispatch()
	const value = useSelector((state: AppState) => state.logic.TITLE);
	const [valid, setValid] = useState<string>('');
	const [error, setError] = useState<string>('');
	const handleValueInput = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		const filteredValue = inputValue.replace(/[0-9]/g, '');
		dispatch({ type: 'TITLE', payload: filteredValue })
	}




	return (
		<>
			<MyInput onChange={handleValueInput} value={value} valid={valid} placeholder='Напишите название заявки' />
			<Validation value={value} setError={setError} setValid={setValid} mod='title' />
			{error && <span style={{ border: 'none' }} className={valid}>{error}</span>}
		</>
	)
}
export default Title 