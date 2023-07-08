import React, { useState, ChangeEvent, useEffect } from 'react';
import '../application.css';
import MyInput from '../UI/input/MyInput';
import arrow from '../../../img/arrow.svg'
import { useDispatch, useSelector } from 'react-redux'
import Validation from './Validate';
import { AppState } from '../appState';
const Type: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [error, setError] = useState<string>('');
	const [valid, setValid] = useState<string>('');

	const selectedOption = useSelector((state: AppState) => state.logic.TYPE);

	const dispatch = useDispatch()
	const options = ['Классический', 'Продвинутый', 'Стандартный'];
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};
	const handleOptionSelect = (option: string) => {
		dispatch({ type: 'TYPE', payload: option })
		setIsOpen(false);
	};



	return (
		<div className="">
			<div className="d-flex type-cursor" onClick={toggleDropdown} >
				<MyInput placeholder='Выберите тип' valid={valid} readOnly value={selectedOption} />
				<img src={arrow} alt="" className={isOpen ? 'arrow__application rotate' : 'arrow__application'} />
			</div>
			{isOpen && (
				<ul>
					{options.map((option) => (
						<li key={option} onClick={() => handleOptionSelect(option)}>
							{option}
						</li>

					))}
				</ul>
			)}
			<Validation value={selectedOption} setError={setError} setValid={setValid} mod='type' />
			{error && <span style={{ border: 'none' }} className={valid}>{error}</span>}
		</div>
	)
}
export default Type 