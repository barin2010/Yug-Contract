import React from 'react';
import css from './Vacant.module.css';
import selectDownBlack from '../../images/icons/selectDownBlack.svg';
// import selectDownWhite from '../../images/icons/selectDownWhite.svg';
import bagMob from '../../images/icons/bagMob.svg';

const Vacant = () => {
  return (
    <section className={css.vacant}>
      <div className="container">
        <div className={css.wrapper}>
          <div className={css.header}>
            <div className={css.title}>Вакансії:</div>
            <div className={css.filterBox}>
              <p className={css.filterText}>застосувати фільтри</p>
              <button className={css.filterButton}>
                <img
                  className={css.filterSelect}
                  src={selectDownBlack}
                  alt="select"
                />
              </button>
            </div>
          </div>
          <div className={css.grid}>
            <div className={css.selectBlock}>
              <img className={css.selectBlockImg} src={bagMob} alt="bag" />
              <p className={css.selectBlockText}>Продажі</p>
              <select className={css.select} name="" id=""></select>
            </div>
            <div className={css.selectBlock}>
              <img className={css.selectBlockImg} src={bagMob} alt="bag" />
              <p className={css.selectBlockText}>Фінанси</p>
              <select className={css.select} name="" id=""></select>
            </div>
            <div className={css.selectBlock}>
              <img className={css.selectBlockImg} src={bagMob} alt="bag" />
              <p className={css.selectBlockText}>Бренд та продакт менеджери</p>
              <select className={css.select} name="" id=""></select>
            </div>
            <div className={css.selectBlock}>
              <img className={css.selectBlockImg} src={bagMob} alt="bag" />
              <p className={css.selectBlockText}>Маркетинг та PR</p>
              <select className={css.select} name="" id=""></select>
            </div>
            <div className={css.selectBlock}>
              <img className={css.selectBlockImg} src={bagMob} alt="bag" />
              <p className={css.selectBlockText}>Логістика</p>
              <select className={css.select} name="" id=""></select>
            </div>
            <div className={css.selectBlock}>
              <img className={css.selectBlockImg} src={bagMob} alt="bag" />
              <p className={css.selectBlockText}>HR</p>
              <select className={css.select} name="" id=""></select>
            </div>
            <div className={css.selectBlock}>
              <img className={css.selectBlockImg} src={bagMob} alt="bag" />
              <p className={css.selectBlockText}>Склади</p>
              <select className={css.select} name="" id=""></select>
            </div>
            <div className={css.selectBlock}>
              <img className={css.selectBlockImg} src={bagMob} alt="bag" />
              <p className={css.selectBlockText}>Сервіси</p>
              <select className={css.select} name="" id=""></select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vacant;
