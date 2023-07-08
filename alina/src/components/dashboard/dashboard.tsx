import React, { FC } from 'react';
import './dashboard.css'
import bell from '../../img/bell.svg'
import avatar from '../../img/avatar.svg'
import Chart from './chart';
import Pie from './pie';
import Bar from './bar';
import LineChart from './bar-chart';
// interface MenuItem {
// 	imgSrc: string;
// 	text: string;
// }

const Dashboard: FC = () => (
	<div className="w-100 dashboard__container">
		<div className="dashboard__header ">
			<div className="">
				<p className="dashboard-text">Дашборд: Анализ заявок компании</p>
			</div>
			<div className="d-flex align-items-center">
				<img src={bell} className='dashboard-img me-3' alt="" />
				<img src={avatar} className='dashboard-img ' alt="" />
				<p className="dashboard-avatar-tet ms-4">Иванов И.И</p>
			</div>
		</div>
		<div className="dashboard__charts">
			<div className="liner">
				<Chart />
			</div>
			<div className="d-flex w-100 justify-content-between p-3">
				<div className="bar">
					<Bar />
				</div>
				<div className="line">
					<LineChart />
				</div>
				<div className="pie">
					<Pie />
				</div>


			</div>
		</div>
	</div>

);

export default Dashboard;
