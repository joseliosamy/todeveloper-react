import React from 'react';
import { FigmaArea } from './styled';
import banner from '../../../images/ilustrationFigma.svg';

function Figma(props) {
  return (
    <>
      <FigmaArea>
        <div>
          <h3>Layout do projeto </h3>
          <p>Confira o layout planejado para o evento.</p>
          <a href={props.figma} target="_blank" rel="noreferrer">
            Acessar o figma
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
              <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
            </svg>
          </a>
        </div>

        <div className="image">
          <img src={banner} alt="banner" />
        </div>
      </FigmaArea>
    </>
  );
}

export default Figma;
