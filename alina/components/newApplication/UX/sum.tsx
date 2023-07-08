import React, { useState, ChangeEvent, useEffect } from 'react';
import '../application.css';
import MyInput from '../UI/input/MyInput';
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../appState';
const Sum: React.FC = () => {


	const handleValueInput = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		const onlyNumbers = inputValue.replace(/\D/, '');
		dispatch({ type: 'SUM', payload: onlyNumbers })
	}
	const value = useSelector((state: AppState) => state.logic.SUM);
	const dispatch = useDispatch()

	return (
		<div className="d-flex">
			<MyInput onChange={handleValueInput} value={value} placeholder='Сумма' />
			<p>тг</p>
		</div>
	)
}
export default Sum 