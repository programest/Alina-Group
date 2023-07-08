import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';

export default function Calendar() {
	const dispatch = useDispatch()
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);

	const handleDateChange = (date: Date | null) => {
		setSelectedDate(date);
	};

	const formattedDate = selectedDate ? dayjs(selectedDate).format('DD.MM.YYYY') : '';
	useEffect(() => {
		dispatch({ type: 'DATE', payload: formattedDate })
	}, [formattedDate])

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DateCalendar value={selectedDate} onChange={handleDateChange} />
			{selectedDate && (
				<p>Выбранная дата: {formattedDate}</p>
			)}
		</LocalizationProvider>
	);
}
