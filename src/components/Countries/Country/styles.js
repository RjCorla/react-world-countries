import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled(Link)`
  display: inline-block;
  background: ${(props) => props.theme.elements};
  color: ${(props) => props.theme.text};
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 240px;
  height: 300px;
  border-radius: 5px;
  transition: transform 200ms;

  &:hover {
    transform: scale(1.02);
  }

  &:focus {
    transform: scale(1.02);
  }
`;

export const Img = styled.img`
  height: 150px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
  object-position: center;
`;

export const Details = styled.div`
  padding: 0.5rem 1rem;
  overflow-x: hidden;

  h2 {
    margin-bottom: 0.5rem;
    line-height: 1.4rem;
  }

  strong {
    font-weight: 600;
  }

  ul li {
    margin-bottom: 3px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
