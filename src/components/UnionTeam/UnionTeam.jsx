import React from 'react';
import { nanoid } from 'nanoid';

import css from './UnionTeam.module.css';
import BtnTransparent from 'components/Btns/BtnTransparent';

import data from './unionTeamData.json';
import educationData from './educationData.json';

const images = {};
const importAllImages = r => {
  r.keys().forEach(key => {
    images[key.replace('./', '')] = r(key);
  });
};
importAllImages(
  require.context('../../images/unionTeam', false, /\.(png|jpe?g|svg)$/)
);

const getImagePath = path => {
  return images[path];
};

const UnionTeam = () => {
  return (
    <section className={css.unionTeam}>
      <div className="container">
        <div className={css.wrapper}>
          <div className={css.top}>
            <div className={css.title}>Команда</div>
            <div className={css.description}>
              Завдяки системній роботі та позитивній атмосфері в нашій команді
              комфортно кожному.
            </div>
            <div className={css.btnTeam}>
              <BtnTransparent />
            </div>
          </div>
          <ul className={css.unionTeamList}>
            {data.map(item => (
              <li key={nanoid()} className={css.unionTeamItem}>
                <b>{item.span}</b> {item.text}
              </li>
            ))}
          </ul>
          <ul className={css.ListWrapper}>
            {educationData.map(educat => (
              <li key={nanoid()} className={css.wrapperItem}>
                <picture>
                  <source
                    className={css.wrapperImg}
                    media="(min-width:768px)"
                    srcSet={`${getImagePath(educat.imgDesc)} 1x, ${getImagePath(
                      educat.imgDesc2x
                    )} 2x`}
                  />
                  <img
                    className={css.wrapperImg}
                    src={getImagePath(educat.imgMob)}
                    alt="img"
                    srcSet={`${getImagePath(educat.imgMob)} 1x , ${getImagePath(
                      educat.imgMob2x
                    )} 2x`}
                  />
                </picture>
                <p className={css.wrapperTitle}>{educat.title}</p>
                <ul className={css.ListBottom}>
                  {educat.items.map(item => (
                    <li key={nanoid()} className={css.itemBottom}>
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UnionTeam;
