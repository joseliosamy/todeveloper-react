import styled from 'styled-components';
import ui from '../../../helpers/ui.json';

const { colorSchemma } = ui;

export const DownloadArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  div {
    width: 100%;
    h3 {
      font-size: 2rem;
      margin-bottom: 5px;
    }
    p {
      margin-bottom: 15px;
    }
    a {
      width: 100%;
      max-width: 480px;
      padding: 15px 0;
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
      width: 200px;
      object-fit: cover;
    }
  }
`;
