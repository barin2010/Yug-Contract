import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import css from './Ticker.module.css';

import samsung from '../../images/ticker/samsung.jpg';
import sony from '../../images/ticker/sony.jpg';
import philips from '../../images/ticker/philips.jpg';
import gorenge from '../../images/ticker/gorenge.jpg';
import sharp from '../../images/ticker/sharp.jpg';
import durasell from '../../images/ticker/durasell.jpg';
import panasonic from '../../images/ticker/panasonic.jpg';
import lg from '../../images/ticker/LG.jpg';
import bg from '../../images/ticker/121.jpg';
import asus from '../../images/ticker/asus.jpg';
import acer from '../../images/ticker/acer.jpg';
import lenovo from '../../images/ticker/lenovo.jpg';
import hisense from '../../images/ticker/hisense.jpg';
import sennheiser from '../../images/ticker/sennheiser.jpg';
import huawei from '../../images/ticker/huawei.jpg';
import realme from '../../images/ticker/realme.jpg';
import intel from '../../images/ticker/intel.jpg';
import oppo from '../../images/ticker/oppo.jpg';
import nike from '../../images/ticker/nike.jpg';

const Ticker = () => {
  const imgContainer1Ref = useRef(null);
  const imgContainer2Ref = useRef(null);

  useLayoutEffect(() => {
    const animate = containerRef => {
      const spanWidth = containerRef.current.scrollWidth;
      gsap.fromTo(
        containerRef.current,
        { x: spanWidth },
        { x: -spanWidth, duration: 10, ease: 'none', repeat: -1 }
      );
    };

    animate(imgContainer1Ref);
    animate(imgContainer2Ref);
  }, []);

  return (
    <div>
      <section className={css.ticker}>
        <div className={css.containerTicker}>
          <div className={css.imgContainer} ref={imgContainer1Ref}>
            <img className={css.img} src={samsung} alt="samsung" />
            <img className={css.img} src={sony} alt="sony" />
            <img className={css.img} src={philips} alt="philips" />
            <img className={css.img} src={gorenge} alt="gorenge" />
            <img className={css.img} src={sharp} alt="sharp" />
            <img className={css.img} src={durasell} alt="durasell" />
            <img className={css.img} src={panasonic} alt="panasonic" />
            <img className={css.img} src={lg} alt="LG" />
            <img className={css.img} src={bg} alt="bg" />
          </div>
          <div className={css.imgContainer} ref={imgContainer2Ref}>
            <img className={css.img} src={asus} alt="asus" />
            <img className={css.img} src={acer} alt="acer" />
            <img className={css.img} src={lenovo} alt="lenovo" />
            <img className={css.img} src={hisense} alt="hisense" />
            <img className={css.img} src={sennheiser} alt="sennheiser" />
            <img className={css.img} src={huawei} alt="huawei" />
            <img className={css.img} src={realme} alt="realme" />
            <img className={css.img} src={intel} alt="intel" />
            <img className={css.img} src={oppo} alt="oppo" />
            <img className={css.img} src={nike} alt="nike" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ticker;
