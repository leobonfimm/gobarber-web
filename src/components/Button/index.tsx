import React, { ButtonHTMLAttributes } from 'react';
import { FiLoader } from 'react-icons/fi';

import { Container, ButtonLoading } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: number;
};

const Button: React.FC<ButtonProps> = ({ children, loading = 0, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? (
      <ButtonLoading>
        <FiLoader size={20} />
        Carregando...
      </ButtonLoading>
    ) : (
      children
    )}
  </Container>
);

export default Button;
