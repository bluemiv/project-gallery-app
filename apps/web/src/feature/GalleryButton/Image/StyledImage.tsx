import styled, { css } from 'styled-components';

const size = '250px';

export const StyledImage = styled.button`
  width: ${size};
  height: ${size};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: inherit;

  .image-wrapper {
    width: 100%;
    height: 80%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  label {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${({ theme }) => {
    const { radius, padding, fontColor, primaryColor, transition } = theme.style;
    return css`
      padding: ${padding.sm};
      border: 1px solid ${fontColor};
      border-radius: ${radius.sm};
      row-gap: ${padding.md};
      transition: ${transition()};

      &:hover {
        color: ${primaryColor.dark};
        border: 1px solid ${primaryColor.dark};
        background-color: ${primaryColor.light};
        label {
          cursor: pointer;
        }
      }
    `;
  }}
`;
