import { createContext, useMemo, useState } from "react";
import { ThemeOptions, createTheme } from "@mui/material";

export const tokens = (mode: string) => ({
  ...(mode === "dark"
    ? {
        blue: {
          100: "#cccce6",
          200: "#9999cc",
          300: "#6666b3",
          400: "#333399",
          500: "#000080",
          600: "#000066",
          700: "#00004d",
          800: "#000033",
          900: "#00001a",
        },
        pink: {
          100: "#f4e3e4",
          200: "#e9c6ca",
          300: "#ddaaaf",
          400: "#d28d95",
          500: "#c7717a",
          600: "#9f5a62",
          700: "#774449",
          800: "#502d31",
          900: "#281718",
        },
        yellow: {
          100: "#fff4cc",
          200: "#ffe999",
          300: "#ffdf66",
          400: "#ffd433",
          500: "#ffc900",
          600: "#cca100",
          700: "#997900",
          800: "#665000",
          900: "#332800",
        },
        black: {
          100: "#cccccc",
          200: "#999999",
          300: "#666666",
          400: "#333333",
          500: "#000000",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        green: {
          100: "#d4edd0",
          200: "#aadba2",
          300: "#7fca73",
          400: "#55b845",
          500: "#2aa616",
          600: "#228512",
          700: "#19640d",
          800: "#114209",
          900: "#082104",
        },
        phar: {
          100: "#f7f7f7",
          200: "#f0f0f0",
          300: "#e8e8e8",
          400: "#e1e1e1",
          500: "#d9d9d9",
          600: "#aeaeae",
          700: "#828282",
          800: "#575757",
          900: "#2b2b2b",
        },
        indigo: {
          100: "#e3e6e4",
          200: "#c6cdc9",
          300: "#aab4ae",
          400: "#8d9b93",
          500: "#718278",
          600: "#5a6860",
          700: "#444e48",
          800: "#2d3430",
          900: "#171a18",
        },
        white: {
          100: "#ffffff",
          200: "#ffffff",
          300: "#ffffff",
          400: "#ffffff",
          500: "#ffffff",
          600: "#cccccc",
          700: "#999999",
          800: "#666666",
          900: "#333333",
        },
      }
    : {
        blue: {
          100: "#00001a",
          200: "#000033",
          300: "#00004d",
          400: "#000066",
          500: "#000080",
          600: "#333399",
          700: "#6666b3",
          800: "#9999cc",
          900: "#cccce6",
        },
        pink: {
          100: "#281718",
          200: "#502d31",
          300: "#774449",
          400: "#9f5a62",
          500: "#c7717a",
          600: "#d28d95",
          700: "#ddaaaf",
          800: "#e9c6ca",
          900: "#f4e3e4",
        },
        yellow: {
          100: "#665000",
          200: "#997900",
          300: "#cca100",
          400: "#ffc900",
          500: "#ffd433",
          600: "#ffdf66",
          700: "#ffe999",
          800: "#fff4cc",
          900: "#332800",
        },
        black: {
          100: "#000000",
          200: "#000000",
          300: "#000000",
          400: "#000000",
          500: "#000000",
          600: "#333333",
          700: "#666666",
          800: "#999999",
          900: "#cccccc",
        },
        green: {
          100: "#082104",
          200: "#114209",
          300: "#19640d",
          400: "#228512",
          500: "#2aa616",
          600: "#55b845",
          700: "#7fca73",
          800: "#aadba2",
          900: "#d4edd0",
        },
        phar: {
          100: "#2b2b2b",
          200: "#575757",
          300: "#828282",
          400: "#aeaeae",
          500: "#d9d9d9",
          600: "#e1e1e1",
          700: "#e8e8e8",
          800: "#f0f0f0",
          900: "#f7f7f7",
        },
        indigo: {
          100: "#171a18",
          200: "#2d3430",
          300: "#444e48",
          400: "#5a6860",
          500: "#718278",
          600: "#8d9b93",
          700: "#aab4ae",
          800: "#c6cdc9",
          900: "#e3e6e4",
        },
        white: {
          100: "#333333",
          200: "#666666",
          300: "#999999",
          400: "#cccccc",
          500: "#ffffff",
          600: "#ffffff",
          700: "#ffffff",
          800: "#ffffff",
          900: "#ffffff",
        },
      }),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const themeSettings = (mode: any): Partial<ThemeOptions> => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            blue: {
              main: colors.blue[400],
            },
            phar: {
              main: colors.phar[500],
            },
            darkMode: {
              dark: colors.indigo[700],
              main: colors.indigo[500],
              light: colors.indigo[100],
            },
            background: {
              default: colors.black[900],
            },
          }
        : {
            blue: {
              main: colors.blue[100],
            },
            phar: {
              main: colors.phar[500],
            },
            darkMode: {
              dark: colors.indigo[700],
              main: colors.indigo[500],
              light: colors.indigo[100],
            },
            background: {
              default: "#fcfcfcf",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "san-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "san-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "san-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "san-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "san-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "san-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "san-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
