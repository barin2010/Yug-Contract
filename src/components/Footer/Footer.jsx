import React from 'react';
import css from './Footer.module.css';

import eba from '../../images/footer/eba_mob.svg';
import tuid from '../../images/footer/tuid_mob.svg';
import apitu from '../../images/footer/apitu_mob.svg';
import facebook from '../../images/footer/facebook_mob.svg';
import int from '../../images/footer/In_mob.svg';
import insta from '../../images/footer/insta_mob.svg';
import logoMob from '../../images/footer/logo_mob.png';

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
          <div className={css.footerTopDesc}>Top</div>
          <div className={css.footerBottonMobile}>
            <img className={css.logoMob} src={logoMob} alt="logo" />
            <p className={css.footerMobtext}>
              © 2006-2024 Юг-Контракт. Всі права захищено.
            </p>
          </div>
          <div className={css.footerBottonDEsc}>Botton</div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
