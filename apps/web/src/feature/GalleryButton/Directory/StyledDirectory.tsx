import styled, { css } from 'styled-components';

export const StyledDirectory = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  label {
    display: block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${({ theme }) => {
    const { padding, fontSize } = theme.style;
    return css`
      row-gap: ${padding.md};

      svg {
        font-size: ${fontSize.lg};
      }
    `;
  }}
`;
