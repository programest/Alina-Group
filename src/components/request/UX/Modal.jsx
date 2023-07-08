import React, { useState } from 'react';
import '../UI/modal.css'
const Modal = ({ setOpenModal, id, setUsers, users }) => {


	const closeModal = () => {
		setOpenModal(false);
	};
	const RemoveBase = () => {
		const updatedInputs = users.filter((user) => user.id !== id);
		const updatedUsersWithIds = updatedInputs.map((user, index) => ({
			...user,
			id: index + 1,
		}));
		setUsers(updatedUsersWithIds);
		setOpenModal(false);
	};

	return (
		<div>

			<div className="modal">
				<div className="modal-content">
					<h2>Вы точно хотите удалить этого пользователя?</h2>
					<div className="d-flex justify-content-between mt-4">
						<button className='modal-btn -remove-btn' onClick={() => RemoveBase(id)}>Удалить</button>


						<button className='modal-btn' onClick={closeModal}>Закрыть</button>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Modal;