import React from 'react';

import Case from 'components/Case/Case';
import Client from 'components/Client/Client';
import Contract from 'components/Contract/Contract';
import News from 'components/News/News';
import Ticker from 'components/Ticker/Ticker';

const Home = () => {
  return (
    <div>
      <Contract />
      <Case />
      <Ticker />
      <News />
      <Client
        textBtn="Стати клієнтом"
        textClient=" Якщо ви ще не з нами, заповніть анкету і почнемо співпрацю"
      ></Client>
    </div>
  );
};

export default Home;
