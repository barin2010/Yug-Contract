import React from 'react';

import css from './Header.module.css';
import SwiperHeader from 'components/templates/swiper/Swiper';

import logo from '../../images/header/Logo_color-mobile.png';
import logoDesc from '../../images/header/logo_desc.png';
import burger from '../../images/icons/Burger menu.svg';
import carier from '../../images/icons/carier.svg';
import vendor from '../../images/icons/vendor.svg';
import comIn from '../../images/icons/com_in.svg';

const Header = () => {
  return (
    <div className={css.headerBaner}>
      <div className="container">
        <div className={css.headerMobile}>
          <div className={css.headerNav}>
            <img src={logo} alt="logo" />
            <img src={burger} alt="menu" />
          </div>
          <SwiperHeader />
        </div>

        <div className={css.headerDesc}>
          <div className={css.headerTop}>
            <div className={css.headerTopLogo}>
              <img src={logoDesc} alt="logo" />
            </div>
            <ul className={css.headerDescList}>
              <li className={css.headerDescLink}>
                <img src={carier} alt="carier" />
                <a href="!#">Кар’єра</a>
              </li>
              <li className={css.headerDescLink}>
                <img src={vendor} alt="vendor" />
                <a href="!#">Vendor Relations</a>
              </li>
              <li className={css.headerDescLink}>
                <img src={comIn} alt="comin" />
                <a href="!#">Вхід для клієнтів</a>
              </li>
            </ul>
          </div>
          <div className={css.headerBotton}>
            <nav>
              <ul className={css.headerBottonList}>
                <li className={css.headerBottonLink}>
                  <a href="!#">Про нас</a>
                </li>
                <li className={css.headerBottonLink}>
                  <a href="!#">Каталог</a>
                </li>
                <li className={css.headerBottonLink}>
                  <a href="!#">Для бізнесу</a>
                </li>
                <li className={css.headerBottonLink}>
                  <a href="!#">Новини</a>
                </li>
                <li className={css.headerBottonLink}>
                  <a href="!#">Контакти</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <SwiperHeader />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
