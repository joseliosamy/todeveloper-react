import styled from 'styled-components';
import ui from '../../../helpers/ui.json';

const { colorSchemma } = ui;

export const FigmaArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 15px;
  div {
    width: 100%;
    h3 {
      font-size: 1.5rem;
      margin-bottom: 5px;
    }
    p {
      font-size: 0.9rem;
      margin-bottom: 15px;
    }
    a {
      width: 100%;
      max-width: 400px;
      padding: 15px 0;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${colorSchemma.colorSecondary};
      color: #fff;
      transition: 200ms;
      &:hover {
        background-color: #3f1299;
      }
      svg {
        margin-left: 10px;
        fill: #fff;
      }
    }
  }
  .image {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 160px;
      object-fit: cover;
    }
  }
  @media (max-width: 600px) {
    div {
      a {
        max-width: 300px;
        padding: 15px;
        text-align: center;
        svg {
          width: 30px;
          margin: 0;
        }
      }
    }
    .image {
      width: 50%;
      justify-content: flex-start;
      margin-right: 10px;
      img {
        width: 100px;
      }
    }
  }
  @media (max-width: 400px) {
    flex-direction: column-reverse;
    div {
      text-align: center;
      a {
        width: 70%;
        margin: 0 auto;
      }
    }
    .image {
      justify-content: center;
    }
  }
`;
