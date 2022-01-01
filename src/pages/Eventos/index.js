import React from 'react';

import { EventsArea } from './styled';
import Cards from '../../components/partials/Cards';
import { Delimiters } from '../../components/MainComponets';

function Eventos() {
  return (
    <EventsArea>
      <section className="apresentation">
        <div className="info">
          <p>Eventos disponíveis 🚀</p>
          <p>
            A melhor seleção de eventos web para developers que querem ir para o
            próximo nível
          </p>
        </div>
      </section>
      <Delimiters>
        <Cards />
      </Delimiters>
    </EventsArea>
  );
}
export default Eventos;
