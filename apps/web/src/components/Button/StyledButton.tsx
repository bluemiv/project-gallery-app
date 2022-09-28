import styled, { css } from 'styled-components';
import type { ButtonVariantType } from './Button';

export interface StyledButtonProps {
  variant: ButtonVariantType;
}

export const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  color: #ffffff;

  ${({ theme, variant }) => {
    const { padding, radius, transition } = theme.style;
    const variantColor = theme.style[`${variant}Color`];

    return css`
      padding: ${padding.xs} ${padding.md};
      border-radius: ${radius.sm};
      background-color: ${variantColor.basic};
      transition: ${transition('background-color')};

      &:hover {
        background-color: ${variantColor.dark};
      }
    `;
  }}
`;
