import React from 'react';

import { Link } from 'react-router-dom';

import { CardList } from './styled';
import CardsLoading from '../Loading/CardsLoading';

function Cards(props) {
  var date = props.date;
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
      <CardsLoading loading={props.loading} />
    </>
  );
}
export default Cards;
