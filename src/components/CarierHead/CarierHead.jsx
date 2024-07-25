import React from 'react';
import css from './CarierHead.module.css';
import carierImg from '../../images/CarierHead/imageMobile.jpg';
import carierImg2x from '../../images/CarierHead/imageMobile@2x.jpg';
import carierDesc from '../../images/CarierHead/imageDesc.jpg';
import carierDesc2x from '../../images/CarierHead/imageDesc@2x.jpg';

const CarierHead = () => {
  return (
    <section className={css.carierHead}>
      <div className="container">
        <div className={css.wrapper}>
          <div className={css.carierHeadBlock}>
            <p className={css.carierHeadText}>
              Юг-Контракт – це простір великих можливостей. Вже 30 років тут
              будуються успішні кар’єри, втілюються професійні мрії та
              реалізуються найамбітніші плани особистого розвитку.
            </p>
          </div>
          <div className={css.carierHeadGrid}>
            <div className={css.gridListTop}>
              <p className={css.counter}>Top</p>

              <p
                className={`${css.descript} ${css.bottonRight} ${css.textWhite}`}
              >
                український дистриб’ютор міжнародного рівня
              </p>
            </div>
            <div className={`${css.gridList} ${css.backgroundRed}`}>
              <p className={css.counter}>360°</p>
              <p className={`${css.descript} ${css.textWhite}`}>
                маркетингова експертиза
              </p>
            </div>
            <div className={`${css.gridList} ${css.gridlist3}`}>
              <p className={`${css.counter} ${css.textRed} `}>22</p>
              <p className={css.descript}>регіональні представництва</p>
            </div>
            <div className={`${css.gridList} ${css.gridlist4}`}>
              <p className={`${css.counter} ${css.textRed}`}>22 000</p>
              <p className={css.descript}>товарів</p>
            </div>
            <div
              className={`${css.gridList} ${css.backgroundGrey} ${css.gridlist5}`}
            >
              <p className={`${css.counter} ${css.textRed}`}>6 000</p>
              <p className={css.descript}>клієнтів</p>
            </div>

            <div className={`${css.gridList} ${css.gridlist6}`}>
              <picture>
                <source
                  srcSet={`${carierDesc} 1x , ${carierDesc2x} 2x`}
                  media="(min-width: 768px)"
                />

                <img
                  srcSet={`${carierImg} 1x, ${carierImg2x} 2x`}
                  src={carierImg}
                  alt="img"
                />
              </picture>
            </div>
            <div className={`${css.gridList} ${css.gridlist7}`}>
              <p className={`${css.counter} ${css.textRed}`}>22 000</p>
              <p className={css.descript}>товарів</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarierHead;
