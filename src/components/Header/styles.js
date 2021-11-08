import styled from 'styled-components';

export const HeaderStyled = styled.header`
  color: ${(props) => props.theme.text};
  height: 66px;
  background: ${(props) => props.theme.elements};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
`;

export const Logo = styled.h1`
  font-size: 1rem;
  font-weight: 800;

  @media screen and (min-width: 375px) {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const ThemeSwitcher = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .switch {
    display: inline-block;
    width: 48px;
    height: 24px;
    margin-right: 0.5rem;
    cursor: pointer;

    input {
      display: none;
    }

    input:checked + .toggle-wrapper .toggle {
      transform: translateX(24px);
    }

    .toggle-wrapper {
      width: 100%;
      height: 100%;
      position: relative;
      border-radius: 34px;
      background: ${(props) => props.theme.toggle};
      box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.1005);

      .toggle {
        position: absolute;
        background: ${(props) => props.theme.elements};
        display: flex;
        align-items: center;
        justify-content: center;
        top: 2px;
        left: 2px;
        border-radius: 50%;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
        height: 20px;
        width: 20px;
        transition: transform 400ms;

        i {
          font-size: 14px;
        }
      }
    }
  }

  h6 {
    font-size: 12px;
    font-weight: 600;

    @media screen and (min-width: 375px) {
      font-size: 14px;
    }
  }
`;
