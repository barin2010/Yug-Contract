import React from 'react';
import { Link } from 'react-router-dom';
import css from './Footer.module.css';

import eba from '../../images/footer/eba_mob.svg';
import tuid from '../../images/footer/tuid_mob.svg';
import apitu from '../../images/footer/apitu_mob.svg';
import facebook from '../../images/footer/facebook_mob.svg';
import int from '../../images/footer/In_mob.svg';
import insta from '../../images/footer/insta_mob.svg';
import logoMob from '../../images/footer/logo_mob.png';

import ebaDesc from '../../images/footer/eba_desc.svg';
import tuidDesc from '../../images/footer/tuid_desc.svg';
import apituDesc from '../../images/footer/apitu_desc.svg';
import facebookDesc from '../../images/footer/facebook_desc.svg';
import intDesc from '../../images/footer/In_desc.svg';
import instaDesc from '../../images/footer/insta_desc.svg';
import logoDesk from '../../images/footer/logo_desc.png';

const Footer = () => {
  return (
    <section className={css.footer}>
      <div className="container">
        <div className={css.wrapper}>
          <div className={css.footerTopMobile}>
            <div className={css.footerMobileTop}>
              <p className={css.mobileTopText}>Участь в асоціаціях:</p>
              <ul className={css.mobileTopList}>
                <li className={css.mobileTopItem}>
                  <img src={eba} alt="eba" />
                </li>
                <li className={css.mobileTopItem}>
                  <img src={tuid} alt="tuid" />
                </li>
                <li className={css.mobileTopItem}>
                  <img src={apitu} alt="apitu" />
                </li>
              </ul>
            </div>
            <div className={css.footerMobileTop}>
              <p className={css.mobileTopText}>слідкуйте за нами:</p>
              <ul className={css.mobileTopList}>
                <li className={css.mobileTopItem}>
                  <img src={facebook} alt="facebook" />
                </li>
                <li className={css.mobileTopItem}>
                  <img src={int} alt="int" />
                </li>
                <li className={css.mobileTopItem}>
                  <img src={insta} alt="insta" />
                </li>
              </ul>
            </div>
          </div>
          <div className={css.footerTopDesc}>
            <div className={css.footerTopDEscOne}>
              <p className={css.totDescText}>Участь в асоціаціях:</p>
              <ul className={css.topDescList}>
                <li className={css.topDEscItem}>
                  <img className={css.topDescImg} src={ebaDesc} alt="eba" />
                </li>
                <li className={css.topDEscItem}>
                  <img className={css.topDescImg} src={tuidDesc} alt="tuid" />
                </li>
                <li className={css.topDEscItem}>
                  <img className={css.topDescImg} src={apituDesc} alt="api" />
                </li>
              </ul>
            </div>
            <div className={css.footerTopDescTwo}>
              <ul className={css.footerTopDescTwoList}>
                <li className={css.footerTopDescTwoItem}>
                  <a className={css.footerBottonLink} href="#!">
                    Про нас
                  </a>
                </li>
                <li className={css.footerTopDescTwoItem}>
                  <a className={css.footerBottonLink} href="#!">
                    Каталог
                  </a>
                </li>
                <li className={css.footerTopDescTwoItem}>
                  <a className={css.footerBottonLink} href="#!">
                    Для бізнесу
                  </a>
                </li>
                <li className={css.footerTopDescTwoItem}>
                  <a className={css.footerBottonLink} href="#!">
                    Новини
                  </a>
                </li>
                <li className={css.footerTopDescTwoItem}>
                  <a className={css.footerBottonLink} href="#!">
                    Контакти
                  </a>
                </li>
              </ul>
              <ul className={css.socialList}>
                <li className={css.socialItem}>
                  <img
                    className={css.socialImg}
                    src={facebookDesc}
                    alt="facebook"
                  />
                </li>
                <li className={css.socialItem}>
                  <img className={css.socialImg} src={intDesc} alt="int" />
                </li>
                <li className={css.socialItem}>
                  <img className={css.socialImg} src={instaDesc} alt="insta" />
                </li>
              </ul>
            </div>
          </div>
          <div className={css.footerBottonMobile}>
            <img className={css.logoMob} src={logoMob} alt="logo" />
            <p className={css.footerMobtext}>
              © 2006-2024 Юг-Контракт. Всі права захищено.
            </p>
          </div>
          <div className={css.footerBottonDEsc}>
            <Link to="/">
              <img src={logoDesk} alt="logo" />
            </Link>
            <p>© 2006-2024 Юг-Контракт. Всі права захищено.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
