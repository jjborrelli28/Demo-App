import { createStitches, createTheme } from "@stitches/react";

export const BREAKPOINTS = {
  xs: 550,
  sm: 700,
  md: 1100,
  lg: 1260,
  xl: 1380,
} as const;

export const MQ = {
  xs: `(min-width: ${BREAKPOINTS.xs}px)`,
  sm: `(min-width: ${BREAKPOINTS.sm}px)`,
  md: `(min-width: ${BREAKPOINTS.md}px)`,
  lg: `(min-width: ${BREAKPOINTS.lg}px)`,
  xl: `(min-width: ${BREAKPOINTS.xl}px)`,
} as const;

const media = {
  bp1: `${MQ.xs}`,
  bp2: `${MQ.sm}`,
  bp3: `${MQ.md}`,
  bp4: `${MQ.lg}`,
  bp5: `${MQ.xl}`,
};

const lightTheme = {
  white: "#ffffff",
  black: "#000000",
  azureishWhite: "#dce7f4",
  antiFlashWhite: "#f5f3f0",
  platinum: "#e4e6eb",
  gainsboro: "#dadce1",
  graniteGray: "#6b6965",
  vampireBlack: "#050505",
  aliceBlue: "#e7f3ff",
  blueCrayola: "#1876f2",
};

const theme = {
  colors: lightTheme,
  shadows: lightTheme,
  fontFamilies: {},
  fontWeights: {
    1: "300",
    2: "400",
    3: "500",
    4: "600",
    5: "700",
  },
  fontSizes: {
    base: "0.9375rem",
    1: "1.0625rem",
    2: "1.25rem",
  },
  space: {
    0: "0",
    1: "1px",
    2: "2px",
    3: "3px",
    4: "6px",
    5: "12px",
    6: "16px",
    7: "20px",
    8: "32px",
  },
  sizes: {
    none: "0",
    quarter: "25%",
    hald: "50%",
    threeQuarters: "75%",
    full: "100%",
    headerHeight: "56px",
    iconSize: "40px",
  },
  radii: {
    1: "5px",
    2: "7.5px",
    3: "50px",
    round: "50%",
  },
};

export const { styled, css, keyframes, getCssText, globalCss } = createStitches(
  {
    media: media,
    theme: theme,
    utils: {
      // Abbreviated margin properties
      m: (value: string) => ({
        margin: value,
      }),
      mt: (value: string) => ({
        marginTop: value,
      }),
      mr: (value: string) => ({
        marginRight: value,
      }),
      mb: (value: string) => ({
        marginBottom: value,
      }),
      ml: (value: string) => ({
        marginLeft: value,
      }),
      mx: (value: string) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: string) => ({
        marginTop: value,
        marginBottom: value,
      }),

      // Abbreviated padding properties
      p: (value: string) => ({
        padding: value,
      }),
      pt: (value: string) => ({
        paddingTop: value,
      }),
      pr: (value: string) => ({
        paddingRight: value,
      }),
      pb: (value: string) => ({
        paddingBottom: value,
      }),
      pl: (value: string) => ({
        paddingLeft: value,
      }),
      px: (value: string) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: string) => ({
        paddingTop: value,
        paddingBottom: value,
      }),

      // Abbreviated heigth/width properties
      w: (value: string) => ({
        width: value,
      }),
      minw: (value: string) => ({
        minWidth: value,
      }),
      maxw: (value: string) => ({
        maxWidth: value,
      }),
      h: (value: string) => ({
        height: value,
      }),
      minh: (value: string) => ({
        minHeight: value,
      }),
      maxh: (value: string) => ({
        maxHeight: value,
      }),

      // Abbreviated border properties
      b: (value: string) => ({
        border: value,
      }),
      bt: (value: string) => ({
        borderTop: value,
      }),
      bb: (value: string) => ({
        borderBottom: value,
      }),
      bl: (value: string) => ({
        borderLeft: value,
      }),
      br: (value: string) => ({
        borderRight: value,
      }),
      bx: (value: string) => ({
        borderLeft: value,
        borderRight: value,
      }),
      by: (value: string) => ({
        borderTop: value,
        borderBottom: value,
      }),

      // Abbreviated border radius property
      bra: (value: string) => ({
        borderRadius: value,
      }),

      // A property to apply linear gradient
      linearGradient: (value: string) => ({
        backgroundImage: `linear-gradient(${value})`,
      }),

      // A property to apply radial gradient
      radialGradient: (value: string) => ({
        backgroundImage: `radial-gradient(${value})`,
      }),
    },
  }
);

export const globalStyles = globalCss({
  body: {
    p: "0",
    m: "0",
  },

  "*": {
    fontFamily: "Arial",
    boxSizing: "border-box",
  },
});
