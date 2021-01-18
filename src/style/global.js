import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  padding: 0 15px;
`;

export const FormAndList = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    max-width: 400px;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      display: flex;
      flex-direction: column;

      input {
      margin: 10px 0;
      padding: 5px 10px;
      border-radius: 8px;
      }
    }

    button {
      margin: 10px 0;
      padding: 5px 10px;
      border-radius: 8px;
      background-color: green;
      border: 1px solid red;
    }
  }
`;

export const CalcList = styled.div`
`;

export const CardCald = styled.div`
  box-shadow: 10px 10px 40px 4px rgba(158,158,158,0.39); 
  border-radius: 8px;
  padding: 5px 10px;
  margin-top: 10px; 

  span {
    font-weight: bold;
  }
`;