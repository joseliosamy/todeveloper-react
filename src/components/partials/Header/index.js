import React, { useState } from 'react';
import { HeaderArea } from './styled';
import { Link } from 'react-router-dom';
import imgLogo from '../../../images/icons/logo.png';

function Header() {
  const [menu, setMenu] = useState('disable');

  function disableMenu() {
    setMenu('disable');
  }
  return (
    <>
      <HeaderArea>
        <nav>
          <div>
            <Link to="/">
              <img src={imgLogo} />
            </Link>
            <ul className={menu}>
              <li>
                <Link to="/sobre" onClick={disableMenu}>
                  O que somos?
                </Link>
              </li>
              <li>
                <Link to="/eventos" onClick={disableMenu}>
                  Eventos disponíveis
                </Link>
              </li>
              <li>
                <Link to="/ferramentas" onClick={disableMenu}>
                  Ferramentas para o uso
                </Link>
              </li>
            </ul>
          </div>

          <Link to="/eventos">Assistir</Link>

          <div
            className="menu"
            onClick={() => {
              menu === 'disable' ? setMenu('enable') : setMenu('disable');
            }}
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  className="rows"
                  d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z"
                />
              </g>
            </svg>
          </div>
        </nav>
      </HeaderArea>
    </>
  );
}

export default Header;
