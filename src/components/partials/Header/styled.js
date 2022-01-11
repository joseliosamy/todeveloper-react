import styled from 'styled-components';

import ui from '../../../helpers/ui.json';

const { colorSchemma } = ui;

export const HeaderArea = styled.header`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #d1d1d11f;
  backdrop-filter: blur(5px);
  z-index: 2;
  background-color: #00000099;
  nav {
    width: 80%;
    max-width: 1400px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      height: 100%;
      display: flex;
      align-items: center;
      & > a {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 50px;
        }
      }
      ul {
        height: 100%;
        display: flex;
        li {
          display: flex;
          align-items: center;
          margin-left: 20px;
          a {
            display: flex;
            height: 100%;
            align-items: center;
            justify-content: center;
            font-size: 0.9rem;
            color: ${colorSchemma.colorTerciary};
            font-weight: 600;
            transition: 180ms;
            position: relative;
            ::after {
              content: '';
              width: 0;
              height: 1px;
              display: flex;
              justify-content: center;
              background-color: ${colorSchemma.colorSecondary};
              position: absolute;
              bottom: 0;
              transition: 100ms ease-out;
            }
            &:hover {
              color: #fff;
              ::after {
                width: 100%;
              }
            }
            &:focus {
              color: ${colorSchemma.colorSecondary};
              ::after {
                background-color: ${colorSchemma.colorSecondary};
              }
            }
          }
        }
      }
    }
    .menu {
      display: none;
    }
    & > a {
      padding: 12px 22px;
      border: 1px solid #bbb;
      border-radius: 15px;
      color: #fff;
      font-weight: 600;
      font-size: 0.9rem;
      transition: 180ms;
      &:hover {
        color: ${colorSchemma.colorSecondary};
        border-color: ${colorSchemma.colorSecondary};
        background-color: #23163f;
      }
    }
  }
  @media (max-width: 900px) {
    nav {
      div {
        ul {
          width: 30%;
          height: calc(100vh - 70px);
          position: fixed;
          top: 70px;
          right: -30%;
          flex-direction: column;
          background-color: #000000dd;
          backdrop-filter: blur(5px);
          z-index: 2;
          transition: 550ms ease;
          border-left: 1px solid #d1d1d11f;
          border-top-left-radius: 38px;
          &.enable {
            right: 0;
          }
          li {
            a {
              padding: 25px 15px;
            }
          }
        }
        & + a {
          display: none;
        }
      }
      .menu {
        width: 28px;
        height: 28px;
        display: flex;
        svg {
          cursor: pointer;
          width: 100%;
          .rows {
            fill: ${colorSchemma.colorTerciary};
            transition: 100ms ease;
          }
        }
        &:hover .rows {
          fill: #bbbbbb55;
        }
      }
    }
  }
  @media (max-width: 600px) {
    nav {
      div {
        ul {
          width: 60%;
          right: -60%;
        }
      }
    }
  }
`;
