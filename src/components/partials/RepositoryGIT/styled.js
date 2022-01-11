import styled from 'styled-components';
import ui from '../../../helpers/ui.json';

const { colorSchemma } = ui;

export const RepositoryGITArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 45px 15px;

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
        fill: #fff;
        margin-left: 10px;
      }
    }
  }
  .image {
    width: 80%;
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 220px;
      object-fit: cover;
    }
  }
  @media (max-width: 600px) {
    flex-direction: column-reverse;

    div {
      text-align: center;
    }
    .image {
      margin: 0;
      img {
        width: 50%;
      }
    }
  }
`;
