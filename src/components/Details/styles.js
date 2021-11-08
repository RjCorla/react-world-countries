import styled from 'styled-components';

export const DetailsStyled = styled.div`
  padding: 2.5rem 0;
  color: ${(props) => props.theme.text};
  font-weight: 300;
`;

export const Grid = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1024px) {
    gap: 1rem;
  }
`;

export const Figure = styled.figure`
  @media screen and (min-width: 768px) {
    max-width: 500px;
  }
`;

export const Content = styled.div`
  font-size: 16px;

  @media screen and (min-width: 1024px) {
    display: grid;
    align-content: center;
  }

  .country {
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }

  .row {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
    margin-bottom: 1.5rem;

    strong {
      font-weight: 600;
    }

    @media screen and (min-width: 1024px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
