import { css } from 'styled-components';

const Variables = css`
  :root {
    // Font
    --font-main: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;

    // Font size
    --fz-xxs: 10px;
    --fz-xs: 12px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;

    // Colors
    --white: #fff;
    --white-08: #e1e1e6;
    --black: #000;
    --black-08: #121214;
    --gray: #7f7f7f;
    --blue: #057dcd;

    // Other
    --max-width: 1500px;
    --transition: all 0.25s ease-in-out;
  }
`;

export default Variables;
