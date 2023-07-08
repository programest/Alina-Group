import React, { useState, ChangeEvent, useEffect } from 'react';
import '../application.css';
import MyInput from '../UI/input/MyInput';
import arrow from '../../../img/arrow.svg'
import { useDispatch, useSelector, } from 'react-redux'
import { AppState } from '../appState';

const City: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const selectedOption = useSelector((state: AppState) => state.logic.CITY);
	const options = ['Алматы', 'Астана', 'Бишкек', 'Костанай', 'Тараз'];
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionSelect = (option: string) => {

		setIsOpen(false);
		dispatch({ type: 'CITY', payload: option })


	};
	const dispatch = useDispatch()

	return (
		<div className="">
			<div className="d-flex " onClick={toggleDropdown}>
				<MyInput placeholder='Выберите ваш город' readOnly value={selectedOption} />
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
		</div>
	)
}
export default City 