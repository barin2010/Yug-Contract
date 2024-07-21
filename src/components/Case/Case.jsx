import React from 'react';
import css from './Case.module.css';
import right from '../../images/icons/Vector 8.svg';
import wash from '../../images/case/wash_mob.jpg';
import wash2 from '../../images/case/wash_mob@2x.jpg';
import washDesc from '../../images/case/wash_desc.jpg';
import washDesc1 from '../../images/case/wash_desc@2x.png';
import contr from '../../images/case/Rectangle_desc.jpg';
import contr1 from '../../images/case/Rectangle_desc@2x.jpg';

const Case = () => {
  return (
    <section className={css.case}>
      <div className={css.containerCase}>
        <div className={css.wrapper}>
          <div className={css.title}>
            <h4>Продуктовий портфель</h4>
          </div>
          <div className={css.caseDesc}>
            Ми працюємо з усіма основними категоріями IT, цифрової та побутової
            техніки, товарів для дому, здоров’я і краси. В продуктовому портфелі
            компанії наразі понад 22 000 товарів від 280 світових виробників.
          </div>
          <div className={css.caseBorder}>
            <div className={css.borderBlock}>
              <img
                className={css.borderBlockDesc}
                srcSet={`${contr} 1x, ${contr1} 2x`}
                alt="contract"
              />
              <div className={css.caseBorderRight}>
                <ul className={css.borderBlockList}>
                  <b> Побутова техніка</b>
                  <li>
                    <a href="#!">
                      <b>Мобільні пристрої</b>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <b>IT-техніка</b>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <b>TV і аудіо</b>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <b>Фото та відео</b>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <b>Медичні товари</b>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <b>Посуд</b>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <b>Товари для дому</b>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <b>Інструменти</b>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <b>Іграшки</b>
                    </a>
                  </li>
                </ul>
                <div className={css.caseContract}>
                  <p className={css.caseContractTitle}>
                    Юг-Контракт працює з побутовою технікою з 2010 року
                  </p>
                  <p className={css.caseContratDescr}>
                    представляючи на ринку велику, дрібну, вбудовану, кліматичну
                    техніку та товари для краси і здоров’я
                  </p>
                  <a className={css.caseLink} href="#!">
                    Детальніше
                    <img src={right} alt="more" />
                  </a>
                  <div className={css.frame}></div>
                  <div className={css.caseWash}>
                    <picture>
                      <source
                        className={css.caseWashImage}
                        srcSet={`${washDesc} 1x, ${washDesc1} 2x`}
                        media="(min-width: 768px)"
                      />
                      <img
                        className={css.caseWashImage}
                        src={wash}
                        srcSet={`${wash} 1x, ${wash2} 2x`}
                        alt="wash"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Case;
