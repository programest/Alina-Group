import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux'

const Validation = ({ value, setError, setValid, mod, active = true }) => {
	const valid = useSelector(state => state.logic.VALIDATE)
	const page = useSelector(state => state.logic.PAGE)
	const [initialRender, setInitialRender] = useState(true);

	useEffect(() => {

		// Этот код выполнится только после первого рендера
		if (initialRender) {
			setInitialRender(false);
			return;
		}
		if (mod === "title") {
			if (value.length >= 6) {
				setValid('valid');
				setError('');
			} else {
				setValid('invalid');
				setError('Значение должно содержать больше 5 символов');
			}
		}
		if (mod === "phone") {
			if (value.length >= 4) {
				setValid('valid');
				setError('');
			} else {
				setValid('invalid');
				setError('Введите верный номер телефона');
			}
		}
		if (mod === "type") {
			console.log(value);
			if (value === 'Классический' || value === 'Продвинутый' || value === 'Стандартный') {
				setValid('valid');
				setError('');
			} else {
				setValid('invalid');
				setError('Введите тип заявки');
			}
		}


	}, [value, setError, setValid, mod, active, valid, page]);

	return null; // Компонент не отображает никакого контента, используется только для валидации
};

export default Validation;
