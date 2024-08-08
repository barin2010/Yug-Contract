import React from 'react';
import css from './Reviews.module.css';
import review from '../../images/icons/reviews.svg';
import reviewDesc from '../../images/icons/reviewsDesc.svg';
import arrow from '../../images/icons/arrowRedLeft.svg';
import face from '../../images/reviews/faceMob.png';

const Reviews = () => {
  return (
    <section className={css.reviews}>
      <div className="container">
        <div className={css.wrapper}>
          <div className={css.reviewTextBox}>
            <picture>
              <source
                className={css.reviewImg}
                media="(min-width:768px )"
                src={reviewDesc}
              />

              <img className={css.reviewImg} src={review} alt="review" />
            </picture>
            <p className={css.reviewText}>
              Юг-Контракт – це простір можливостей, де все залежить лише від
              тебе, а твої прагнення підтримають та допоможуть на шляху до мети.
              Треба просто працювати, вчитися і не боятися ставити перед собою
              амбітні цілі.  
            </p>
          </div>
          <div className={css.reviewCardBox}>
            <div className={css.reviewCard}>
              <img className={css.reviewFace} src={face} alt="face" />
              <div className={css.reviewTitle}>
                <p className={css.fullName}>
                  Taras Shevchenko <span>HR Specialist</span>
                </p>
              </div>
            </div>
            <button className={css.reviewBtn}>
              <img className={css.arrow} src={arrow} alt="arrow" />
              <img
                className={`${css.arrow} ${css.arrowRight}`}
                src={arrow}
                alt="arrow"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
