import React, { FC, useState } from 'react';
import dashboard from '../../img/dashboard.svg'
import application from '../../img/application.svg'
import logo from '../../img/logotype.png'
import newApplication from '../../img/newApplicaton.svg'
import applicationError from '../../img/applicationerror.svg'
import applicationCorrect from '../../img/applicationcorrect.svg'
// import burger from '../../img/burger.svg'
import menulogo from '../../img/logo-50%.png'
import close from '../../img/close.svg'
import menuLog from '../../img/menuLogo.svg'
import './menu.css'
import { BrowserRouter, Route, Link } from 'react-router-dom'
interface MenuItem {
	imgSrc: string;
	text: string;
	link: string;
}

const menuItems: MenuItem[] = [
	{ imgSrc: dashboard, link: "/", text: 'Дашборд' },
	{ imgSrc: application, link: "/request", text: 'Мои заявки' },
	{ imgSrc: newApplication, link: "/application", text: 'Новая заявка' },
	{ imgSrc: applicationCorrect, link: "/request", text: 'Согласованные заявки' },
	{ imgSrc: applicationError, link: "/request", text: 'Отклоненные заявки' },
];

const Menu: FC = () => {
	const [menu, setMenu] = useState<boolean>(true);

	const handleMenu = () => {
		setMenu(prevMenu => !prevMenu);
	};
	return (
		<div className="menu__block">
			<div className={menu ? ('logo-img') : ('logo-img -column')}>
				<img src={menu ? (logo) : (menulogo)} alt="" className='pe-3' />
				<div className="pe-3 -cursor">
					<img src={menu ? (close) : (menuLog)} alt="" className={menu ? ('menu-img ') : ('menu-img mb-5 mt-4')} onClick={handleMenu} />
				</div>
			</div>
			<ul className='menu__list'>
				{menuItems.map((item, index) => (
					<Link to={item.link} className='link'>
						<li className="menu__items" key={index} >

							<img src={item.imgSrc} alt="" className={menu ? ' menu-img' : ' menu-img-active menu-img'} />
							{menu ? <p className='menu__text'>{item.text}</p> : <></>}

						</li>
					</Link>
				))}
			</ul>
		</div>
	)
}

export default Menu;
