import React from 'react';
import arrow from '../../../img/arrow.svg';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
	// Формирование массива номеров страниц
	const pageNumbers = [];
	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i);
	}

	// Вычисление номера следующей страницы
	const nextNumbers = currentPage !== totalPages ? currentPage + 1 : 1; // Если текущая страница последняя, то перейти на первую страницу
	// Вычисление номера предыдущей страницы
	const prevNumbers = currentPage !== 1 ? currentPage - 1 : totalPages; // Если текущая страница первая, то перейти на последнюю страницу

	// Вычисление максимального номера страницы
	const maxNumber = Math.max(...pageNumbers);
	// Обновление параметра "page" в адресной строке
	const updatePageInURL = (page) => {
		const searchParams = new URLSearchParams(window.location.search);
		searchParams.set('page', page);
		window.history.replaceState({}, '', `${window.location.pathname}?${searchParams}`);
	};

	// Обработчик нажатия кнопки перехода на страницу
	const handlePageChange = (pageNumber) => {
		onPageChange(pageNumber); // Вызываем функцию переданную из родительского компонента
		updatePageInURL(pageNumber); // Обновляем параметр "page" в адресной строке
	};

	return (
		<div className='mt-lg-5 d-flex'>
			{/* Кнопка для перехода на предыдущую страницу */}
			<button onClick={() => handlePageChange(prevNumbers)}>
				<img src={arrow} className='next' alt="" />
			</button>

			<div className="d-flex">
				{/* Отображение текущей страницы и общего количества страниц */}
				<p>{maxNumber}</p>
				<span>/</span>
				<p>{currentPage}</p>
			</div>

			{/* Кнопка для перехода на следующую страницу */}
			<button onClick={() => handlePageChange(nextNumbers)}>
				<img src={arrow} className=' prev' alt="" />
			</button>
		</div>
	);
};

export default Pagination;
