import { Button, Container, extendTheme, Input } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
});

Button.defaultProps = { ...Button.defaultProps, borderRadius: "0" };
Input.defaultProps = { ...Input.defaultProps, borderRadius: "0" };
Container.defaultProps = { ...Container.defaultProps, maxW: "container.xl" };

export default theme;
