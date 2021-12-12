import React from 'react';

import { EventsArea } from './styled';
import Cards from '../../components/partials/Cards';

function Eventos() {
  return (
    <EventsArea>
      <h1>Eventos disponíveis</h1>
      <Cards />
    </EventsArea>
  );
}
export default Eventos;
