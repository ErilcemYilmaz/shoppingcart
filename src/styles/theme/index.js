import { createTheme } from "@mui/material/styles";
import { lighten } from "polished";

export const DrawerWidth = 250;

export const Colors = {
  primary: "#4d6600",
  secondary: "#ac852c",
  success: "#4CAF50",
  info: "#00a2ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#0e1b20",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  ///////////////
  // Grays
  ///////////////
  dim_grey: "#696969",
  dove_gray: "#d5d5d5",
  body_bg: "#1d2127",
  light_gray: "rgb(230,230,230)",
  container_bg: "#333333",
  ///////////////
  // Solid Color
  ///////////////
  //font color
  white: "#fff",
  black: "#000",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
      styleOverrides: {
        tooltip: {
          background: Colors.primary,
        },
        arrow: {
          color: Colors.primary,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: DrawerWidth,          
          background: Colors.container_bg,
          color: Colors.secondary,
          borderRadius: '0px 100px 0px 0px',
          borderRight: `1px solid ${Colors.container_bg}`
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: lighten(0.2, Colors.secondary)
        }
      }
    },
    MyShopButton: {
      styleOverrides: {
        root: {
          color: Colors.white,
        },
        primary: {
          background: Colors.primary,
          "&:hover": {
            background: lighten(0.05, Colors.primary),
          },
        },
        secondary: {
          background: `${Colors.secondary}`,
          "&:hover": {
            background: lighten(0.05, Colors.primary),
          },
        },
      },
    },
  },
});

export default theme;