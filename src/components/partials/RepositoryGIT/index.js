import React from 'react';
import { DownloadArea } from './styled';
import banner from '../../../images/ilustrationRepositoryGIT.svg';

function RepositoryGIT(props) {
  return (
    <>
      <DownloadArea>
        <div>
          <h3>Repositório GitHub</h3>
          <p>
            Tenha acesso ao projeto finalizado. Disponível na plataforma GitHub,
            vem conferir.
          </p>
          <a href={props.RepositoryGIT}>
            Acessar o repositório
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
              <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
            </svg>
          </a>
        </div>

        <div className="image">
          <img src={banner} alt="banner" />
        </div>
      </DownloadArea>
    </>
  );
}

export default RepositoryGIT;
