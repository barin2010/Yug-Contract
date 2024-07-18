import React from 'react';
import css from './News.module.css';
import right from '../../images/icons/Vector 8.svg';
import newsMobile1 from '../../images/news/news1-mobile.jpg';
import newsMobile1_2x from '../../images/news/news1-mobile@2x.jpg';
import newsMobile2 from '../../images/news/news2-mobile.jpg';
import newsMobile2_2x from '../../images/news/news2-mobile@2x.jpg';
import newsDesk1 from '../../images/news/news1-desc.jpg';
import newsDesk1_2x from '../../images/news/news1-desc@2x.jpg';
import newsDesk2 from '../../images/news/news2-desc.jpg';
import newsDesk2_2x from '../../images/news/news2-desc@2x.jpg';
import newsDesk3 from '../../images/news/news3-desc.jpg';
import newsDesk3_2x from '../../images/news/news3-desc@2x.jpg';

const News = () => {
  return (
    <section className={css.news}>
      <div className="container">
        <div className={css.wrapper}>
          <div className={css.newsHeader}>
            <div className={css.header}>Новини</div>
            <div className={css.headerOll}>
              <p>Всі новини</p>
              <img src={right} alt="right" />
            </div>
          </div>
          <ul className={css.newsList}>
            <li className={css.newsItem}>
              <picture>
                <source
                  className={css.newsItemImg}
                  srcSet={`${newsDesk1} 1x, ${newsDesk1_2x} 2x`}
                  media="(min-width: 768px)"
                />
                <img
                  className={css.newsItemImg}
                  src={newsMobile1}
                  srcSet={`${newsMobile1} 1x, ${newsMobile1_2x} 2x`}
                  alt="news"
                />
              </picture>
              <data value="29.06.2023">29.06.2023</data>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
            <li className={css.newsItem}>
              <picture>
                <source
                  className={css.newsItemImg}
                  srcSet={`${newsDesk2} 1x, ${newsDesk2_2x} 2x`}
                  media="(min-width: 768px)"
                />
                <img
                  className={css.newsItemImg}
                  src={newsMobile2}
                  srcSet={`${newsMobile2} 1x, ${newsMobile2_2x} 2x`}
                  alt="news"
                />
              </picture>
              <data value="29.06.2023">29.06.2023</data>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
            <li className={css.newsItem}>
              <picture>
                <source
                  className={css.newsItemImg}
                  srcSet={`${newsDesk3} 1x, ${newsDesk3_2x} 2x`}
                  media="(min-width: 768px)"
                />
                <img
                  className={css.newsItemImg}
                  src={newsMobile1}
                  srcSet={`${newsMobile1} 1x, ${newsMobile1_2x} 2x`}
                  alt="news"
                />
              </picture>
              <data value="29.06.2023">29.06.2023</data>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default News;
