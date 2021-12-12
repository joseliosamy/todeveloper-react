import styled from 'styled-components';
import ui from '../../../helpers/ui.json';

const { colorSchemma } = ui;

//
//
export const CardList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  .card {
    max-width: 300px;
    min-height: 100%;
    margin: 15px;
    display: flex;
    flex-direction: column;
    border-radius: 18px 18px 5px 5px;
    position: relative;
    overflow: hidden;
    transition: 200ms ease;
    .cardBanner {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .cardView {
      width: 100%;
      height: 100%;
      position: absolute;
      bottom: -75%;
      background-color: #00000099;
      backdrop-filter: blur(5px);
      border-radius: 18px 18px 0 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      transition: 200ms ease;
      h2 {
        font-size: 1.1rem;
        padding-top: 8px;
        color: ${colorSchemma.textHeaderColor};
        z-index: 1;
        text-align: center;
      }
      span {
        color: #fff;
        background-color: #000;
        padding: 10px 35px 10px 35px;
        transform: translateY(-50%);
        border-radius: 18px;
        transition: 200ms ease;
        text-align: center;
        &:hover {
          background-color: ${colorSchemma.textHeaderOne};
          box-shadow: 0 0 15px ${colorSchemma.textHeaderOne};
        }
        &:active {
          background-color: #7336ec;
        }
      }
    }
    &:hover > .cardView {
      bottom: 0;
    }
    /* &:hover h2 {
      color: transparent;
    } */
    &:hover {
      transform: scale(1.1, 1.1);
      box-shadow: 0 0 5px ${colorSchemma.textHeaderOne};
    }
  }
  @media (max-width: 900px) {
    .card {
      max-width: 500px;
      .cardView {
        bottom: -80%;
      }
    }
  }
  @media (max-width: 600px) {
    .card {
      .cardView {
        bottom: -60%;
      }
    }
  }
`;
