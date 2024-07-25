import React from 'react';
import { nanoid } from 'nanoid';
import unionData from './unionData.json';
import css from './Union.module.css';
import BtnTransparent from 'components/Btns/BtnTransparent';

const images = {};
const importAllImages = r => {
  r.keys().forEach(key => {
    images[key.replace('./', '')] = r(key);
  });
};
importAllImages(
  require.context('../../images/union', false, /\.(png|jpe?g|svg)$/)
);

const getImagePath = path => {
  return images[path];
};

const Union = () => {
  return (
    <section className={css.union}>
      <div className={css.wrapper}>
        <div className={css.unionTop}>
          <h3 className={css.unionTitle}>Об’єднуємо кращих</h3>
          <p className={css.unionDescr}>
            Обираємо в команду визнаних експертів, перспективних фахівців,
            амбітних новачків та наших мужніх ветеранів - цінуємо кожного та
            відкриваємо можливості для всіх.
          </p>
          <div className={css.unionBtn}>
            <BtnTransparent />
          </div>
        </div>

        <div className={css.unionBottomList}>
          {unionData.map(union => (
            <div key={nanoid()} className={css.unionBottom}>
              <picture>
                <source
                  className={css.unionImg}
                  srcSet={`${getImagePath(union.imgDesc)} 1x, ${getImagePath(
                    union.imgDesc2x
                  )} 2x`}
                  media="(min-width:768px)"
                />
                <img
                  className={css.unionImg}
                  src={getImagePath(union.imgMob)}
                  alt="img"
                  srcSet={`${getImagePath(union.imgMob)} 1x, ${getImagePath(
                    union.imgMob2x
                  )} 2x`}
                />
              </picture>
              <p className={css.imgHeader}>{union.title}</p>
              <ul className={css.unionList}>
                {union.items.map(item => (
                  <li key={nanoid()} className={css.unionItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Union;
