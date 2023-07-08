import axios from 'axios';
import './request.css';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import cross from '../../img/cross2.svg'
import edit from '../../img/edit.svg'
import sort from '../../img/sort.svg'
import search from '../../img/search.svg'
import sort2 from '../../img/sort-svgrepo.svg'
import Modal from './UX/Modal';
import Pagination from './UX/Pagination';

// Интерфейс для описания структуры данных пользователя
interface RequestData {
	id: number;
	name: string;
	phone: string;
	type: string;
	data: string;
	num: number;
	city: string;
	bol: string;
}

const Request: React.FC = () => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [users, setUsers] = useState<RequestData[]>([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredUsers, setFilteredUsers] = useState<RequestData[]>([]);
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [selectedUserId, setSelectedUserId] = useState<number | null>(null); // Состояние для хранения id выбранного пользователя

	const objectsPerPage = 20;

	// Загрузка пользователей при монтировании компонента
	useEffect(() => {
		fetchUsers();
	}, []);

	// Функция для загрузки пользователей с сервера
	async function fetchUsers() {
		try {
			const response = await axios.get<RequestData[]>('http://localhost:4000/users');
			setUsers(response.data);
		} catch (e) {
			alert(e);
		}
	}

	// Функция для открытия модального окна и сохранения id выбранного пользователя
	const openModalFunc = (id: number) => {
		setOpenModal(true);
		setSelectedUserId(id); // Сохраняем id выбранного пользователя в состоянии
	};

	// Обработчик изменения страницы пагинации
	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	const indexOfLastObject = currentPage * objectsPerPage;
	const indexOfFirstObject = indexOfLastObject - objectsPerPage;
	const currentObjects = filteredUsers.slice(indexOfFirstObject, indexOfLastObject);

	// Обработчик изменения значения поискового запроса
	function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
		setSearchTerm(event.target.value);
	}

	// Фильтрация пользователей по поисковому запросу
	useEffect(() => {
		const filtered: RequestData[] = users.filter(user =>
			user.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFilteredUsers(filtered);
	}, [users, searchTerm]);

	return (
		<div className="table__block">
			<div className="user__panel mb-5 mt-3">
				<div className="input-group">
					<input type="text" value={searchTerm} onChange={handleSearch} placeholder="Поиск..." />
					<div className="input-group-text search" >
						<img src={search} alt="" className='input__img' />
					</div>
				</div>
				<div className="d-flex">
					<img className="tr__img me-5" src={sort2} alt="" />
					<img className="tr__img" src={sort} alt="" />
				</div>
			</div>
			<table>
				<thead>
					<tr className='header__tr'>
						<th className='header__table'>id</th>
						<th className='header__table'>ФИО</th>
						<th className='header__table'>Номер телефона</th>
						<th className='header__table'>Тип заявки</th>
						<th className='header__table'>Дата</th>
						<th className='header__table'>Кол-во</th>
						<th className='header__table'>Город</th>
						<th className='header__table'>звонок</th>
					</tr>
				</thead>
				<tbody>
					{currentObjects.map((user) => (
						<>
							<tr key={user.id}>
								<td>{user.id}</td>
								<td>{user.name}</td>
								<td>{user.phone}</td>
								<td>{user.type}</td>
								<td>{user.data}</td>
								<td>{user.num}</td>
								<td>{user.city}</td>
								<td>{user.bol}</td>
								<td><img className="tr__img" src={edit} alt="" /></td>
								<td><img className="tr__img" src={cross} onClick={() => openModalFunc(user.id)} alt="" /></td>
							</tr>
							{openModal && (
								<Modal
									setOpenModal={setOpenModal}
									id={selectedUserId} // Передаем id пользователя в компонент Modal
									setUsers={setUsers}
									users={users}
								/>
							)}
						</>
					))}
				</tbody>
			</table>
			<Pagination
				currentPage={currentPage}
				totalPages={Math.ceil(filteredUsers.length / objectsPerPage)}
				onPageChange={handlePageChange}
			/>
		</div>
	);
}

export default Request;