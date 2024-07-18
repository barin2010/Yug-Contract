import Case from 'components/Case/Case';
import Client from 'components/Client/Client';
import Contract from 'components/Contract/Contract';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import News from 'components/News/News';
import Ticker from 'components/Ticker/Ticker';
import Up from 'components/Up/Up';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Header />
      <Contract />
      <Up />
      <Case />

      <Ticker />
      <News />
      <Client />
      <Footer />
    </div>
  );
};

export default Home;
