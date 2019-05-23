import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import photo from './images/photo.png';
import exit from './images/exit.png';

import './styleHeader.css';
export default class Header extends React.Component {
 getClassName(currentLink){
     return  (currentLink === location.pathname) ? "menu__element menu__element_active" : "menu__element"
}
  render() {
    return (
		<header className="header">
            <div className="header__content">
                <a href="" className="logo">
                    <img src={logo} alt="logo"/>
                 </a>
                <div className="user">
                    <img className="user__photo" src={photo} alt="user"/>
                    <div className="user__name">Keller Viktor</div>
                    <img className="user__exit" src={exit} alt="exit"/>
                </div>
				<nav className="nav">
					<ul className="menu">
                        <li className={this.getClassName('/today')}>
                            <Link to='/today' className="menu__element_link ">На сегодня</Link>
                        </li>
                        <li className="menu__element">
                            <a href="" className="menu__element_link">Разметить</a>
                        </li>
                        <li className={this.getClassName('/later')}>
                            <Link to='/later' className="menu__element_link">На потом</Link>
                        </li>
                        <li className={this.getClassName('/finished')}>
                            <Link to='/finished' className="menu__element_link">Выполненные</Link>
                        </li>
					</ul>
				</nav>
			</div>
		</header>
    );
  }
}

Header.propTypes = {
  children: React.PropTypes.node
};
