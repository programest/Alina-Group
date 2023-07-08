import React, { useState, ChangeEvent, useEffect } from 'react';
import '../application.css';
import MyInput from '../UI/input/MyInput';
import arrow from '../../../img/arrow.svg'
import { useDispatch, useSelector, } from 'react-redux'
import { AppState } from '../appState';
const Num: React.FC = () => {
	const value = useSelector((state: AppState) => state.logic.NUM);
	const increment = () => {
		const newValue = value + 1;
		dispatch({ type: 'NUM', payload: newValue });
	};
	const decrement = () => {
		{ value > 0 ? dispatch({ type: 'NUM', payload: value - 1 }) : <></> }
	}
	const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({ type: 'NUM', payload: e.target.value })

	}


	const dispatch = useDispatch()

	return (
		<div className="d-flex">
			<MyInput placeholder='0' value={value} onChange={handleChangeValue} />
			<div className="flex-column h-100 align-items-center d-flex">
				<img src={arrow} alt="" onClick={increment} className=' rotate mb-2 arrow__application' />
				<img src={arrow} alt="" onClick={decrement} className=' arrow__application' />
			</div>
		</div>
	)
}
export default Num 