import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.elements};
  margin-bottom: 2rem;

  @media screen and (min-width: 768px) {
    max-width: 500px;
    margin-bottom: 0;
    margin-right: 2rem;
  }

  .btn {
    border: none;
    background: transparent;
    margin-right: 1rem;
    outline: none;
    color: ${(props) => props.theme.text};

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }

    i {
      font-size: 1rem;
    }
  }

  input {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: ${(props) => props.theme.text};
    font-size: 1rem;
  }
`;
