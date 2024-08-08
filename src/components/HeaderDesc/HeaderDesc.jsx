import React from 'react';
import { Link } from 'react-router-dom';
import css from './HeaderDesc.module.css';
import SwiperHeader from 'components/templates/swiper/Swiper';

import carier from '../../images/icons/carier.svg';
import vendor from '../../images/icons/vendor.svg';
import comIn from '../../images/icons/com_in.svg';
import logoDesc from '../../images/header/logo_desc.png';

const HeaderDesc = () => {
  return (
    <div>
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
          {/* <SwiperHeader /> */}
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
  );
};

export default HeaderDesc;
