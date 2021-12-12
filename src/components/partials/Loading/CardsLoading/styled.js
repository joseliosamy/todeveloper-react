import styled from 'styled-components';

export const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  .cardOn {
    width: 300px;
    margin: 15px;
    height: 197px;
    border-radius: 18px 18px 5px 5px;
    background-color: #0c0c0c;
    animation: cardsLoading 3s ease infinite;
  }
  .cardOff {
    display: none;
  }
  @media (max-width: 900px) {
    .card {
      width: 500px;
      height: 283px;
      &:nth-child(3),
      &:nth-child(4),
      &:nth-child(5),
      &:nth-child(6) {
        display: none;
      }
    }
  }
  @media (max-width: 600px) {
    .card {
      width: 500px;
      height: 230px;
      &:nth-child(3) {
        display: block;
      }
    }
  }
  @media (max-width: 450px) {
    .card {
      width: 500px;
      height: 170px;
    }
  }
  @media (max-width: 350px) {
    .card {
      width: 500px;
      height: 125px;
      &:nth-child(4) {
        display: block;
      }
    }
  }
  @media (max-width: 300px) {
    .card {
      width: 500px;
      height: 105px;
    }
  }
`;
