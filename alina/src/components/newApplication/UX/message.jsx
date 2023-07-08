
import React, { useEffect, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
const Message = ({ message, setActiveMessage, activeMessage }) => {

	const handleClose = () => {
		setActiveMessage(false);
	};
	return (

		<Snackbar
			open={activeMessage}
			autoHideDuration={3000}
			onClose={handleClose}
			message={message}
		/>


	);
};

export default Message;