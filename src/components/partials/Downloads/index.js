import React from 'react';
import { DownloadArea } from './styled';

function Downloads(props) {
  var complementaryMaterial = {};
  complementaryMaterial = props.currentEvent.complementaryMaterial;
  //Problema ao tentar rodar um map no complementaryMaterial, aparentemente ele está sendo atribuido como um objeto, apesar de ser um array
  console.log(complementaryMaterial);

  return (
    <>
      <DownloadArea>
        <h3>Área de Downloads</h3>
        <small>
          Segue o download clicando <a href="#"></a>
        </small>
      </DownloadArea>
    </>
  );
}

export default Downloads;
