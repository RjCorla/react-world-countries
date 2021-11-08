import styled from 'styled-components';

export const CountriesStyled = styled.section`
  padding: 2.5rem 0;
  color: ${(props) => props.theme.text};
  font-size: 14px;

  .filter-flex {
    margin-bottom: 2rem;

    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const Grid = styled.main`
  display: grid;
  justify-items: center;
  gap: 2rem;
  grid-template-columns: 1fr;

  @media screen and (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
