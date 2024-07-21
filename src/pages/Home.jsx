import React from 'react';

import Case from 'components/Case/Case';
import Client from 'components/Client/Client';
import Contract from 'components/Contract/Contract';

// import Header from 'components/Header/Header';
import News from 'components/News/News';
import Ticker from 'components/Ticker/Ticker';

const Home = () => {
  return (
    <div>
      <Contract />
      <Case />

      <Ticker />
      <News />
      <Client />
    </div>
  );
};

export default Home;
