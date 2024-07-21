import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import css from './Header.module.css';
import SwiperHeader from 'components/templates/swiper/Swiper';

import logo from '../../images/header/Logo_color-mobile.png';
import logoDesc from '../../images/header/logo_desc.png';
import burger from '../../images/icons/Burger menu.svg';
import carier from '../../images/icons/carier.svg';
import vendor from '../../images/icons/vendor.svg';
import comIn from '../../images/icons/com_in.svg';

const Header = ({
  backgroundImageMobile,
  backgroundImageMobile2x,
  backgroundImageDesktop,
  backgroundImageDesktop2x,
  showSwiper,
}) => {
  useEffect(() => {
    const setBackground = () => {
      const isRetina = window.devicePixelRatio > 1;
      const isMobile = window.innerWidth < 768;
      const imageUrl = isMobile
        ? isRetina
          ? backgroundImageMobile2x
          : backgroundImageMobile
        : isRetina
        ? backgroundImageDesktop2x
        : backgroundImageDesktop;
      document.documentElement.style.setProperty(
        '--background-image',
        `url(${imageUrl})`
      );
    };

    setBackground();
    window.addEventListener('resize', setBackground);

    return () => {
      window.removeEventListener('resize', setBackground);
    };
  }, [
    backgroundImageMobile,
    backgroundImageMobile2x,
    backgroundImageDesktop,
    backgroundImageDesktop2x,
  ]);

  return (
    <div className={css.headerBaner}>
      <div className="container">
        <div className={css.headerMobile}>
          <div className={css.headerNav}>
            <img src={logo} alt="logo" />
            <img src={burger} alt="menu" />
          </div>
          {showSwiper && <SwiperHeader />}
        </div>

        <div className={css.headerDesc}>
          <div className={css.headerTop}>
            <div className={css.headerTopLogo}>
              <Link to="/">
                <img src={logoDesc} alt="logo" />
              </Link>
            </div>
            <ul className={css.headerDescList}>
              <li className={css.headerDescLink}>
                <img src={carier} alt="carier" />

                <Link to="/carier">Кар’єра</Link>
              </li>
              <li className={css.headerDescLink}>
                <img src={vendor} alt="vendor" />

                <Link to="/vendor">Vendor Relations</Link>
              </li>
              <li className={css.headerDescLink}>
                <img src={comIn} alt="comin" />

                <Link to="/login">Вхід для клієнтів</Link>
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
          <div>{showSwiper && <SwiperHeader />}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
