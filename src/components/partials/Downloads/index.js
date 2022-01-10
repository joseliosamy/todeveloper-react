import React from 'react';
import { DownloadArea } from './styled';
import banner from '../../../images/ilustrationDownload.svg';

function Downloads(props) {
  return (
    <>
      <DownloadArea>
        <div>
          <h3>Download dos materiais</h3>
          <p>
            Baixe todos os materiais essenciais para acompanhar todo o evento.
          </p>
          <a href={props.downloadURL}>
            Baixar agora
            <svg
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
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

export default Downloads;
