import { css } from 'lit';

export const baseStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }

  img,
  picture,
  svg {
    display: block;
    max-width: 100%;
  }

  .flex-group {
    display: flex;
    align-items: center;
    gap: .5rem;
    flex-wrap: wrap;
  }
`;
