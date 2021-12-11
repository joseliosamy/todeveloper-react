import styled from 'styled-components';

export const AboutArea = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      label {
        margin-left: 5px;
      }
      input {
        width: 300px;
        height: 50px;
        border: 1px solid white;
        background-color: #ffffff11;
        border-radius: 30px;
        color: white;
        padding: 0 10px;
      }
    }
  }
`;
