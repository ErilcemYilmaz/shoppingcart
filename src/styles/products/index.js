import styled from "@emotion/styled";
import { Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { slideInBottom, slideInRight } from "../../animation";
import { Colors } from "../theme";

export const Product = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    position: "relative",
  },

}));

export const ProductImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "100%",

  padding: '10px',
  [theme.breakpoints.down("md")]: {
    width: "80%",
    padding: '24px',
  },
}));

export const ProductActionButton = styled(IconButton)(() => ({
  background: Colors.white,
  margin: 4,
}));

export const ProductFavButton = styled(ProductActionButton, { shouldForwardProp: (prop) => prop !== 'isFav' })(({ isFav, theme }) => ({
  color: isFav ? Colors.primary : Colors.light,
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    right: 0,
    top: 0,
  },
}));

export const ProductAddToCart = styled(Button, {
  shouldForwardProp: (prop) => prop !== "show",
})(({ show, theme }) => ({
  width: "200px",
  fontSize: "12px",
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    bottom: "2%",
    width: "280px",
    padding: "10px 5px",
    animation:
      show &&
      `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
  background: Colors.secondary,
  opacity: 0.9,
}));

export const ProductMetaWrapper = styled(Box)(({ theme }) => ({
  padding: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const ProductActionsWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "show",
})(({ show, theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: show ? 'visible' : 'none',
    position: "absolute",
    right: 0,
    top: '20%',
    animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  }
}));



export const customStyles_Selected = {
  control: (base, state) => ({
    ...base,
    width: 150,
    height: 40,
    borderColor: state.isFocused ? Colors.primary : Colors.secondary,
    '&:hover': {
      borderColor: Colors.container_bg
    },
    backgroundColor: Colors.container_bg,
  }),
  singleValue: (base, state) => ({
    ...base,
    color: state.isSelected ? 'black' : 'white',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    color: Colors.secondary,
    '&:hover': {
      color: Colors.primary
    }
  }),
  option: (base, state) => ({
    ...base,
    background: state.isSelected ? Colors.container_bg : Colors.container_bg,
    '&:hover': {
      background: Colors.secondary,
    },
    backgroundColor: Colors.container_bg,
    color: 'white'
  }),
  menu: (base) => ({
    ...base,
    width: 150,
    background: Colors.container_bg
  }),
  placeholder: (base) => ({
    ...base,
    color: Colors.secondary,
}),

}