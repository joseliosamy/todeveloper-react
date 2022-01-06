import { Loading } from './styled';

function CardsLoading(props) {
  var hanndleClass = props.loading === false ? 'cardOff' : 'cardOn';

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
