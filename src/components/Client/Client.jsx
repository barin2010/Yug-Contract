import React from 'react';
import css from './Client.module.css';
// import right from '../../images/icons/right_white.svg';
import mob from '../../images/client/mob.jpg';
import mob2x from '../../images/client/mob2x@2x.png';
import desc from '../../images/client/desc.jpg';
import desc2x from '../../images/client/desc2x@2x.png';

const Client = () => {
  return (
    <section className={css.client}>
      <div className={css.wrapper}>
        <div className="container">
          <div className={css.clientContainer}>
            <div className={css.text}>
              Якщо ви ще не з нами, заповніть анкету і почнемо співпрацю
            </div>
            <a className={css.clientLink} href="#!">
              стати клієнтом
              <svg
                className={css.svgDesc}
                width="101"
                height="16"
                viewBox="0 0 101 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M100.707 8.70711C101.098 8.31658 101.098 7.68342 100.707 7.29289L94.3431 0.928932C93.9526 0.538408 93.3195 0.538408 92.9289 0.928932C92.5384 1.31946 92.5384 1.95262 92.9289 2.34315L98.5858 8L92.9289 13.6569C92.5384 14.0474 92.5384 14.6805 92.9289 15.0711C93.3195 15.4616 93.9526 15.4616 94.3431 15.0711L100.707 8.70711ZM0 9H100V7H0V9Z" />
              </svg>
              <svg
                className={css.svgMob}
                width="34"
                height="12"
                viewBox="0 0 34 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M33.0303 6.53033C33.3232 6.23744 33.3232 5.76256 33.0303 5.46967L28.2574 0.696699C27.9645 0.403806 27.4896 0.403806 27.1967 0.696699C26.9038 0.989593 26.9038 1.46447 27.1967 1.75736L31.4393 6L27.1967 10.2426C26.9038 10.5355 26.9038 11.0104 27.1967 11.3033C27.4896 11.5962 27.9645 11.5962 28.2574 11.3033L33.0303 6.53033ZM0.5 6.75H32.5V5.25H0.5V6.75Z" />
              </svg>
            </a>
            <picture>
              <source
                className={css.clientImg}
                srcSet={`${desc} 1x , ${desc2x} 2x`}
                media="(min-width:768px)"
              />
              <img
                className={css.clientImg}
                src={mob}
                srcSet={`${mob} 1x , ${mob2x} 2x`}
                alt="img"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
