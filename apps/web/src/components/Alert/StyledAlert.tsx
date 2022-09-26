import styled, { css } from 'styled-components';
import { AlertType } from './Alert';

export interface StyledAlertProps {
  type: AlertType;
}

export const StyledAlert = styled.div<StyledAlertProps>`
  display: flex;
  align-items: center;

  .text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .title {
      font-weight: bold;
    }
  }

  ${({ theme, type }) => {
    const { padding, radius, fontSize, blackColor } = theme.style;

    const typeColor = theme.style[`${type}Color`];

    return css`
      color: ${blackColor};

      padding: ${padding.sm};
      border-radius: ${radius.sm};
      column-gap: ${padding.sm};

      border: 1px solid ${typeColor.basic};
      background-color: ${typeColor.light};

      .icon {
        color: ${typeColor.basic};
        font-size: ${fontSize.lg};
      }

      .title {
        margin-bottom: ${padding.sm};
      }
    `;
  }}
`;
