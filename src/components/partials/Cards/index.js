import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { CardList } from './styled';
import CardsLoading from '../Loading/CardsLoading';

function Cards() {
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState([]);

  useEffect(() => {
    fetch('https://api-todeveloper.vercel.app/events')
      .then((res) => res.json())
      .then((json) => setDate(json))
      .catch(() => console.log('erro'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <CardList>
        {date.map((item, id) => {
          return (
            <Link className="card" to={item.redirectURL} key={id}>
              <div className="cardBanner">
                <img src={item.bannerURL} alt="banner" />;
              </div>

              <div className="cardView">
                <h2 key={id}>{item.eventName}</h2>
                <span>Ver+</span>
              </div>
            </Link>
          );
        })}
      </CardList>
      <CardsLoading fetchAPI={loading} />
    </>
  );
}
export default Cards;
