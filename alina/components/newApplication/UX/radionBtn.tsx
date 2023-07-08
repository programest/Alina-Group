import React, { useState, useEffect } from 'react';
import '../application.css';
import MyInput from '../UI/input/MyInput';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../appState';
const Radio: React.FC = () => {
	const dispatch = useDispatch();
	const value = useSelector((state: AppState) => state.logic.RADIO);


	const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({ type: 'RADIO', payload: event.target.value });
	};

	return (
		<div className="d-flex text-start justify-content-start">
			<div className="d-flex me-4">
				<p className="me-1">Да</p>
				<label className="radioBtn">
					<input
						checked={value === 'Да'}
						type="radio"
						value="Да"
						onChange={handleRadioChange}
					/>
					<span className="radio-custom"></span>
				</label>
			</div>
			<div className="d-flex">
				<p className="me-1">Нет</p>
				<label className="radioBtn">
					<input
						checked={value === 'Нет'}
						type="radio"
						value="Нет"
						onChange={handleRadioChange}
					/>
					<span className="radio-custom"></span>
				</label>
			</div>
		</div>
	);
};

export default Radio;
