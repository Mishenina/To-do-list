import React from 'react';

import './styleFooter.css';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__menu">
                    <ul className="footer__menu">
                        <li className="footer__menu-element footer__menu-element_text">
                            <a href="" className="footer__menu-element_link">О нас</a>
                        </li>
                        <li className="footer__menu-element footer__menu-element_text">
                            <a href="" className="footer__menu-element_link">Поддержка</a>
                        </li>
                        <li className="footer__menu-element footer__menu-element_text">
                            <a href="" className="footer__menu-element_link">Условия</a>
                        </li>
                        <li className=" footer__menu-element footer__menu-element_text">
                            <a href="" className="footer__menu-element_link">Язык</a>
                        </li>
                    </ul>
                    <div
                        className=" footer__menu-element footer__menu-element_text footer__menu-element_info footer__menu-element_right">
                        &#169; 2017 Eise Tasks
                    </div>
                </div>
            </footer>
        );
    }
}

Footer.propTypes = {
};
