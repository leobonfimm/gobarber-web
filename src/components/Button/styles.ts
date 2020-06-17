import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
  loading?: number;
}

export const Container = styled.button<ButtonProps>`
  background: #ff9000;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }

  ${(props) =>
    !!props.loading &&
    css`
      &:hover {
        background: ${shade(0, '#ff9000')};
      }

      cursor: not-allowed;
    `}
`;

export const ButtonLoading = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  svg {
    margin-right: 16px;
  }
`;
