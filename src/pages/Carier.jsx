import React from 'react';
import Client from 'components/Client/Client';
import CarierHead from 'components/CarierHead/CarierHead';
import Values from 'components/Values/Values';
import Union from 'components/Union/Union';
import UnionTeam from 'components/UnionTeam/UnionTeam';
import Vacant from 'components/Vacant/Vacant';

const Carier = () => {
  return (
    <div>
      <CarierHead />
      <Values />
      <Union />
      <UnionTeam />
      <Vacant />
      <Client
        textBtn="Стати клієнтом"
        textClient="Не знайшли потрібної вакансії? Все одно розкажіть про себе.
Нам завжди потрібні фахівці."
      />
    </div>
  );
};

export default Carier;
