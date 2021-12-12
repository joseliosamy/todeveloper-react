import React, { useState } from 'react';

import { Loading } from './styled';
function CardsLoading(props) {
  // eslint-disable-next-line no-unused-vars
  const [loadingStatus, setLoadingStatus] = useState(props.fetchAPI);

  var hanndleClass = props.fetchAPI === false ? 'cardOff' : 'cardOn';

  return (
    <Loading>
      <div className={hanndleClass}></div>
      <div className={hanndleClass}></div>
      <div className={hanndleClass}></div>
      <div className={hanndleClass}></div>
      <div className={hanndleClass}></div>
      <div className={hanndleClass}></div>
    </Loading>
  );
}
export default CardsLoading;
