import styled from 'styled-components';
export const ComplementaryMaterialArea = styled.div`
  width: 100%;
  .path {
    display: flex;
    padding: 35px 0;
    text-align: center;
    a:nth-child(1) {
      color: #acacac;
      font-weight: 600;
      &:hover {
        color: #fff;
      }
    }
    div:nth-child(2) {
      fill: #acacac;
    }
    a:nth-child(3) {
      font-weight: 600;
      color: #acacac;
      &:hover {
        color: #fff;
      }
    }
    div:nth-child(4) {
      fill: #acacac;
    }
    div:nth-child(5) {
      color: #fff;
    }
  }
`;
