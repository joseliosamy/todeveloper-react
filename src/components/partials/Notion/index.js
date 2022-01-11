import React from 'react';
import { NotionArea } from './styled';
import banner from '../../../images/ilustrationNotion.svg';

function Notion(props) {
  return (
    <>
      <NotionArea>
        <div>
          <h3>Configuração de ambiente</h3>
          <p>
            Entenda como fazer todas as configurações necessárias para conseguir
            acompanhar o evento sem nenhum problema.
          </p>
          <a href={props.notion} target="_blank" rel="noreferrer">
            Acessar o notion
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
              <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
            </svg>
          </a>
        </div>

        <div className="image">
          <img src={banner} alt="banner" />
        </div>
      </NotionArea>
    </>
  );
}

export default Notion;
