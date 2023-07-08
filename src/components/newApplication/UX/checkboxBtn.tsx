import React, { useState, useEffect } from 'react';
import '../application.css';
import MyInput from '../UI/input/MyInput';
import usePhoneMask from '../../../hooks/usePhoneMask';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../appState';

const Checkbox: React.FC = () => {
	const dispatch = useDispatch();
	const value = useSelector((state: AppState) => state.logic.CHECKBOX);


	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const checkboxValue = event.target.value;
		if (value === checkboxValue) {
			// Если выбран уже выбранный вариант, сбросить значение
			dispatch({ type: 'CHECKBOX', payload: '' });
		} else {
			// В противном случае, установить новое значение
			dispatch({ type: 'CHECKBOX', payload: checkboxValue });
		}
	};

	return (
		<div className="">
			<div className="d-flex mb-2">
				<p className="me-1">Письма на почту</p>
				<label className="checkbox-container">
					<input
						type="checkbox"
						className="checkbox"
						value="Письма на почту"
						checked={value === 'Письма на почту'}
						onChange={handleCheckboxChange}
					/>
					<span className="checkmark"></span>
				</label>
			</div>
			<div className="d-flex">
				<p className="me-1">СМС на телефон</p>
				<label className="checkbox-container">
					<input
						type="checkbox"
						className="checkbox"
						value="СМС на телефон"
						checked={value === 'СМС на телефон'}
						onChange={handleCheckboxChange}
					/>
					<span className="checkmark"></span>
				</label>
			</div>
		</div>
	);
};

export default Checkbox;