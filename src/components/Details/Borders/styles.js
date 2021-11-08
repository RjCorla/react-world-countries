import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BordersStyled = styled.div`
  strong {
    font-weight: 600;
    display: block;

    @media screen and (min-width: 1024px) {
      display: inline-block;
    }
  }
`;

export const BorderLink = styled(Link)`
  padding: 4px 8px;
  background: ${(props) => props.theme.elements};
  border-radius: 3px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  color: ${(props) => props.theme.text};
  margin: 4px;
  display: inline-block;

  &:hover {
    opacity: 0.8;
  }
`;
