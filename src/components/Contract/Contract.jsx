import React from 'react';
import css from './Contract.module.css';

const Contract = () => {
  return (
    <section className="contract">
      <div className={css.wrapper}>
        <div className="container">
          <div className={css.wrapperTitle}>
            <h1>Юг-Контракт - це:</h1>
          </div>
          <ul className={css.contractGrid}>
            <li className={`${css.gridList} ${css.gridlist1}`}>
              <h4 className={css.gridTitle}>TOP</h4>
              <p className={css.gridDescr}>
                український дистриб’ютор міжнародного рівня
              </p>
            </li>
            <li
              className={`${css.gridList} ${css.gridListGrey} ${css.gridlist2}`}
            >
              <h4 className={css.gridTitle}>Рішення</h4>
              <p className={css.gridDescr}>
                для кожного бізнесу – від торгівлі до HoReCa
              </p>
            </li>
            <li
              className={`${css.gridList} ${css.gridListRed}  ${css.gridlist3}`}
            >
              <h4 className={`${css.gridTitle} ${css.gridTextWhite}`}>360°</h4>
              <p className={`${css.gridDescr} ${css.gridTextWhite}`}>
                маркетингова експертиза
              </p>
            </li>
            <li className={`${css.gridList} ${css.gridlist4}`}>
              <h4 className={css.gridTitle}>Мульти канальна дистриб’юція</h4>
            </li>
            <li className={`${css.gridList} ${css.gridlist5} `}>
              <h4
                className={`${css.gridTitle} ${css.gridTextWhite} ${css.gridTitleTop}`}
              >
                Широкий товарний асортимент
              </h4>
              <p
                className={`${css.gridDescr} ${css.gridTextWhite} ${css.gridDescrBotton}`}
              >
                від техніки до іграшок
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contract;
