import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  max-width: 69rem;
  margin: auto;
  display: ${(props) => (props.flex ? 'flex' : props.grid ? 'grid' : 'block')};
  align-items: ${(props) => (props.center ? 'center' : 'start')};
  justify-content: ${(props) =>
    props.between ? 'space-between' : props.center ? 'center' : 'start'};
  height: 100%;
`;
