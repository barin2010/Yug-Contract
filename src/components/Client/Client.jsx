import React from 'react';
import css from './Client.module.css';

import mob from '../../images/client/mob.jpg';
import mob2x from '../../images/client/mob2x@2x.png';
import desc from '../../images/client/desc.jpg';
import desc2x from '../../images/client/desc2x@2x.png';
import BtnClient from 'components/Btns/BtnClient';

const Client = ({ textBtn, textClient }) => {
  return (
    <section className={css.client}>
      <div className={css.wrapper}>
        <div className="container">
          <div className={css.clientContainer}>
            <div className={css.text}>{textClient}</div>
            <div className={css.btnClient}>
              <BtnClient textBtn={textBtn} />
            </div>
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
