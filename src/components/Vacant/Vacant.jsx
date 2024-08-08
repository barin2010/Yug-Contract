import React from 'react';
import css from './Vacant.module.css';
import selectDownBlack from '../../images/icons/selectDownBlack.svg';
import bagMob from '../../images/icons/bagMob.svg';
import finanse from '../../images/icons/finanseMob.svg';
import brandMob from '../../images/icons/brendMob.svg';
import market from '../../images/icons/marketMob.svg';
import logistic from '../../images/icons/logisticMob.svg';
import Hr from '../../images/icons/HRMob.svg';
import Skl from '../../images/icons/SklMob.svg';
import servis from '../../images/icons/servisMob.svg';
import bagDesc from '../../images/icons/bagDesc.svg';
import finanseDesc from '../../images/icons/finanseDesc.svg';
import brandDesc from '../../images/icons/brendDesc.svg';
import marketDesc from '../../images/icons/marketDesc.svg';
import logisticDesc from '../../images/icons/logisticDesc.svg';
import HrDesc from '../../images/icons/HRDesc.svg';
import SklDesc from '../../images/icons/SklDesc.svg';
import servisDesc from '../../images/icons/servisDesc.svg';

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
              <picture>
                <source
                  className={css.selectBlockImg}
                  media="(min-width: 768px)"
                  srcSet={bagDesc}
                />
                <img className={css.selectBlockImg} src={bagMob} alt="bag" />
              </picture>
              <p className={css.selectBlockText}>Продажі</p>
              <div className={css.selectWrapper}>
                <select className={css.select} name="sales" id="sales">
                  <option value="1">Выберите опцию</option>
                  <option value="2">
                    Регіональний продакт-менеджер зі збуту (Посуд, товари для
                    дому)
                  </option>
                  <option value="3">
                    Регіональний продакт-менеджер зі збуту (Посуд, товари для
                    дому)
                  </option>
                  <option value="4">
                    Регіональний продакт-менеджер зі збуту (Посуд, товари для
                    дому)
                  </option>
                </select>
              </div>
            </div>
            <div className={css.selectBlock}>
              <picture>
                <source
                  className={css.selectBlockImg}
                  media="(min-width: 768px)"
                  srcSet={finanseDesc}
                />
                <img
                  className={css.selectBlockImg}
                  src={finanse}
                  alt="finanse"
                />
              </picture>
              <p className={css.selectBlockText}>Фінанси</p>
              <select className={css.select} name="finance" id="finance">
                <option value="1">Выберите опцию</option>
                <option value="2">option 2</option>
                <option value="3">option 3</option>
                <option value="4">option 4</option>
              </select>
            </div>
            <div className={css.selectBlock}>
              <picture>
                <source
                  className={css.selectBlockImg}
                  media="(min-width: 768px)"
                  srcSet={brandDesc}
                />
                <img
                  className={css.selectBlockImg}
                  src={brandMob}
                  alt="brand"
                />
              </picture>
              <p className={css.selectBlockText}>Бренд та продакт менеджери</p>
              <select className={css.select} name="brand" id="brand">
                <option value="1">Выберите опцию</option>
                <option value="2">option 2</option>
                <option value="3">option 3</option>
                <option value="4">option 4</option>
              </select>
            </div>
            <div className={css.selectBlock}>
              <picture>
                <source
                  className={css.selectBlockImg}
                  media="(min-width: 768px)"
                  srcSet={marketDesc}
                />
                <img
                  className={css.selectBlockImg}
                  src={market}
                  alt="marketing"
                />
              </picture>
              <p className={css.selectBlockText}>Маркетинг та PR</p>
              <select className={css.select} name="marketing" id="marketing">
                <option value="1">Выберите опцию</option>
                <option value="2">option 2</option>
                <option value="3">option 3</option>
                <option value="4">option 4</option>
              </select>
            </div>
            <div className={css.selectBlock}>
              <picture>
                <source
                  className={css.selectBlockImg}
                  media="(min-width: 768px)"
                  srcSet={logisticDesc}
                />
                <img
                  className={css.selectBlockImg}
                  src={logistic}
                  alt="logistic"
                />
              </picture>
              <p className={css.selectBlockText}>Логістика</p>
              <select className={css.select} name="logistic" id="logistic">
                <option value="1">Выберите опцию</option>
                <option value="2">option 2</option>
                <option value="3">option 3</option>
                <option value="4">option 4</option>
              </select>
            </div>
            <div className={css.selectBlock}>
              <picture>
                <source
                  className={css.selectBlockImg}
                  media="(min-width: 768px)"
                  srcSet={HrDesc}
                />
                <img className={css.selectBlockImg} src={Hr} alt="Hr" />
              </picture>
              <p className={css.selectBlockText}>HR</p>
              <select className={css.select} name="hr" id="hr">
                <option value="1">Выберите опцию</option>
                <option value="2">option 2</option>
                <option value="3">option 3</option>
                <option value="4">option 4</option>
              </select>
            </div>
            <div className={css.selectBlock}>
              <picture>
                <source media="(min-width: 768px)" srcSet={SklDesc} />
                <img className={css.selectBlockImg} src={Skl} alt="skl" />
              </picture>
              <p className={css.selectBlockText}>Склади</p>
              <select className={css.select} name="warehouse" id="warehouse">
                <option value="1">Выберите опцию</option>
                <option value="2">option 2</option>
                <option value="3">option 3</option>
                <option value="4">option 4</option>
              </select>
            </div>
            <div className={css.selectBlock}>
              <picture>
                <source media="(min-width: 768px)" srcSet={servisDesc} />
                <img
                  className={css.selectBlockImg}
                  src={servis}
                  alt="servise"
                />
              </picture>
              <p className={css.selectBlockText}>Сервіси</p>
              <select className={css.select} name="services" id="services">
                <option value="1">Выберите опцию</option>
                <option value="2">option 2</option>
                <option value="3">option 3</option>
                <option value="4">option 4</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vacant;
