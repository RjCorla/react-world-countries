import styled from 'styled-components';

export const FilterStyled = styled.div`
  padding: 1rem;
  background: ${(props) => props.theme.elements};
  border-radius: 3px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;

  &.show ul {
    transform: scale(1, 1);
  }

  &.show i {
    transform: rotate(-180deg);
  }

  span {
    margin-right: 0.5rem;
  }

  i {
    pointer-events: none;
    transition: transform 400ms;
  }

  ul {
    transform: scale(1, 0);
    transform-origin: top;
    transition: transform 400ms;
    position: absolute;
    background: ${(props) => props.theme.elements};
    top: 105%;
    left: 0;
    width: 100%;
    border-radius: 3px;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);

    li {
      padding: 5px 1rem;

      &:first-child {
        padding-top: 10px;
      }

      &:last-child {
        padding-bottom: 10px;
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
