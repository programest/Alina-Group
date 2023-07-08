import React from 'react';
import './App.css';
import Menu from './components/menu/menu';
import Dashboard from './components/dashboard/dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Request from './components/request/request';
import Application from './components/newApplication/application';

const App = () => {
	return (
		<BrowserRouter>
			<div className="container-fluid">
				<div className="wrapper">

					<Menu />
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/application" element={<Application />} />
						<Route path="/request" element={<Request />} />
					</Routes>

				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
