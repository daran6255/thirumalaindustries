import { extendTheme } from "@chakra-ui/react";

const disabledStyles = {
  _disabled: {
    opacity: 0.6,
    cursor: "not-allowed",
  },
};

const theme = extendTheme({
  colors: {
    brand: {
      // 🔵 Primary (Blue)
      blue: "#2E3778",
      blueLight: "#404A99",
      blueDark: "#1D255C",

      // 🔴 Accent (Red)
      red: "#AA2A29",
      redLight: "#C33A38",
      redDark: "#7A1D1C",

      // ⚪ Neutral
      backgroundLight: "#F9FAFB",
      backgroundDark: "#121212",
      surface: "#FFFFFF",
      border: "#E5E7EB",
      textPrimary: "#111827",
      textSecondary: "#6B7280",

      // ✅ Support colors
      success: "#22C55E",
      warning: "#F59E0B",
      info: "#0EA5E9",
      error: "#DC2626",
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "full",
        fontWeight: "semibold",
        transition: "all 0.3s ease",
      },
      variants: {
        primary: {
          backgroundColor: "brand.red",
          color: "white",
          _hover: {
            backgroundColor: "brand.redLight",
          },
          ...disabledStyles,
        },
        secondary: {
          backgroundColor: "brand.blue",
          color: "white",
          _hover: {
            backgroundColor: "brand.blueLight",
          },
          ...disabledStyles,
        },
        ghost: {
          backgroundColor: "transparent",
          color: "brand.blue",
          _hover: {
            backgroundColor: "brand.backgroundLight",
          },
        },
        danger: {
          backgroundColor: "brand.error",
          color: "white",
          _hover: {
            backgroundColor: "brand.redDark",
          },
        },
      },
    },
    Tabs: {
      variants: {
        enclosed: {
          tab: {
            _selected: {
              color: "brand.blue",
              borderColor: "brand.blue",
            },
          },
        },
      },
    },
  },
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        bg: "brand.backgroundLight",
        color: "brand.textPrimary",
        lineHeight: "base",
        transition: "background-color 0.3s ease, color 0.3s ease",
      },
      "::-webkit-scrollbar": {
        width: "8px",
      },
      "::-webkit-scrollbar-track": {
        background: "#f1f1f1",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#888",
        borderRadius: "8px",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#555",
      },
    },
  },
  textStyles: {
    primaryHeading: {
      color: "brand.blue",
      fontWeight: "bold",
      fontSize: ["2xl", "3xl", "4xl"],
    },
    secondaryHeading: {
      color: "brand.red",
      fontWeight: "semibold",
      fontSize: ["xl", "2xl", "3xl"],
    },
    bodyText: {
      color: "brand.textPrimary",
      fontSize: ["md", "lg"],
    },
    subtleText: {
      color: "brand.textSecondary",
      fontSize: "sm",
    },
  },
  semanticTokens: {
    colors: {
      gradient:
        "linear-gradient(135deg, #2E3778 0%, #404A99 50%, #AA2A29 100%)",
    },
  },
});

export default theme;
