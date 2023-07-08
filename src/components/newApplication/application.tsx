import React, { useState, ChangeEvent, MouseEvent } from 'react';
import './application.css';

import MyInput from './UI/input/MyInput';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import Title from './UX/title';
import Num from './UX/num';
import Type from './UX/type';
import City from './UX/city';
import Phone from './UX/phone';
import Sum from './UX/sum';
import Radio from './UX/radionBtn';
import Checkbox from './UX/checkboxBtn';
import Calendar from './UX/calendar';
import Validation from './UX/Validate';
import { AppState } from './appState';
import { NavLink } from 'react-router-dom';
import Message from './UX/message';
import { useEffect } from 'react';
import { Navigate } from "react-router-dom";
const Application: React.FC = () => {

	const [active, setActive] = useState<boolean>(false); // Состояние для определения активности формы
	const dispatch = useDispatch(); // Хук useDispatch для отправки действий (actions) в Redux
	const data = useSelector((state: AppState) => state.logic); // Хук useSelector для получения данных из Redux

	const valid = data.TITLE.trim() !== '' && data.PHONE.trim() !== '' && data.TYPE.trim() !== 'Выберите тип'; // Проверка на валидность данных формы
	const [redirectTo, setRedirectTo] = useState<boolean>(false); // Состояние для перенаправления на другую страницу
	const [activeMessage, setActiveMessage] = useState<boolean>(false); // Состояние для определения активности сообщения

	const activeValid = () => {
		// Функция для запуска проверки и добавления заявки
		handleAddRequest();
	};

	// Функция для очистки ввода
	const clearInput = () => {
		if (active === true) {
			dispatch({ type: 'CLEAR' }); // Очистка ввода путем отправки действия CLEAR в Redux
		}
	};

	const handleAddRequest = async () => {
		dispatch({ type: 'PAGE', payload: true })
		const newRequest = {
			"name": data.TITLE,
			"phone": data.PHONE,
			"type": data.TYPE,
			"data": data.DATE,
			"num": data.NUM,
			"city": data.CITY,
			"bol": data.RADIO,
		};

		if (valid === true) {
			try {
				setActiveMessage(true); // Установка активного сообщения
				const response = await axios.post('http://localhost:4000/users', newRequest); // Отправка POST-запроса на сервер
				console.log('Новая заявка добавлена:', response.data);
				dispatch({ type: 'CLEAR' }); // Очистка данных формы путем отправки действия CLEAR в Redux

				setRedirectTo(true)
			} catch (error) {
				console.error('Ошибка при добавлении заявки:', error);
			}
		} else {
			//
			setActiveMessage(true); // Установка активного сообщения
		}
	};

	// Проверка на заполненность данных
	useEffect(() => {
		for (const field of Object.values(data)) {
			if (
				(typeof field === 'string' && field.trim() !== '') ||
				field !== null ||
				field !== 'Не выбрано' ||
				field !== undefined
			) {
				setActive(true); // Установка активного состояния, если хотя бы одно поле заполнено
				return; // Выход из цикла, если хотя бы одно поле заполнено
			}
		}
		setActive(false); // Установка активного состояния в false, если ни одно поле не заполнено
	}, [data]);

	return (
		<div className="application__container">
			{redirectTo ? <Navigate to="/request" /> : <></>}

			<div className="application__inputs">
				<div className="d-flex justify-content-between mb-lg-5">
					<div className="title ">
						<h3 className="application__title">Название заявки*</h3>
						<Title />
					</div>
					<div className="num ">
						<h3 className="application__title">Количество заявителей</h3>
						<Num />
					</div>
					<div className="phone__number">
						<h3 className="application__title">Номер телефона*</h3>
						<Phone />
					</div>
				</div>
				<div className="d-flex">
					<div className="flex-column  left__board ">
						<div className="d-flex mb-lg-5 justify-content-between">
							<div className="sum">
								<h3 className="application__title">Сумма заявки</h3>
								<Sum />
							</div>
							<div className="type">
								<h3 className="application__title">Тип заявки*</h3>
								<Type />
							</div>
						</div>
						<div className="radio mb-lg-5 ">
							<h3 className="application__title">Позвонить для потверждения</h3>
							<Radio />
						</div>
						<div className="checkbox  mb-lg-5">
							<h3 className="application__title">Получать дополнительную информацию</h3>
							<Checkbox />
						</div>
						<p className='mb-lg-5 requred'>*-оязательные поля</p>
						<div className="btn__block d-flex justify-content-between">
							<button className='button__application send' onClick={activeValid}>Отправить</button>
							<button className={`button__application ${active ? '' : 'disabled-btn'}`} onClick={clearInput}>Очистить</button>

						</div>
					</div>

					<div className="d-flex">
						<div className="city me-5">
							<h3 className="application__title ">Город</h3>
							<City />
						</div>
						<div className="calendar">
							<h3 className="application__title ms-3">Дата заявки</h3>
							<Calendar />
						</div></div>

				</div>

			</div>

			{valid ? <Message message='Заявка успешна добавлена ' setActiveMessage={setActiveMessage} activeMessage={activeMessage} />
				:
				<Message message='Заполните все поля ' setActiveMessage={setActiveMessage} activeMessage={activeMessage} />}
		</div>
	);

}

export default Application;