import {
  image1,
  image2,
  image3,
  image4,
  real1,
  real2,
  real3,
  real4,
  real5,
} from "../assets";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  PieChartOutlined,
} from "@mui/icons-material";

export function capitalizeFirstLetter(string: any) {
  return string?.charAt(0)?.toUpperCase() + string?.slice(1);
}

export const menuRoutes = [
  {
    title: "about us",
    href: "about-us",
    active: "/about-us",
  },
  {
    title: "payment & Delivery",
    href: "payment-delivery",
    active: "/payment-delivery",
  },

  {
    title: "discounts",
    active: "/discounts",
    href: "discounts",
  },
  {
    title: "contacts",
    active: "/contacts",
    href: "contacts",
  },
];

export const languagesRoutes = [
  {
    title: "en",
    active: "/en",
  },
  {
    title: "ru",
    active: "/ru",
  },
  {
    title: "az",
    active: "/az",
  },
];

export const foodRoutes = [
  {
    title: "Pizza",
    href: "/pizza",
    active: "/pizza",
  },
  {
    title: "Soups",
    href: "/soups",
    active: "/soups",
  },

  {
    title: "Salads and snacks",
    active: "/salads-and-snacks",
    href: "/salads-and-snacks",
  },

  {
    title: "Burgers and bugetti",
    active: "/burgers-and-bugetti",
    href: "/burgers-and-bugetti",
  },
  {
    title: "Sets",
    active: "/sets",
    href: "/sets",
  },

  {
    title: "Deserts",
    active: "/deserts",
    href: "/deserts",
  },
  {
    title: "Drinks",
    active: "/drinks",
    href: "/drinks",
  },
];

export const featuredData = [
  {
    title: "Only fresh and quality products",
    img: image1,
  },
  {
    title: "Only fresh and quality products",
    img: image2,
  },
  {
    title: "Only fresh and quality products",
    img: image3,
  },
  {
    title: "Only fresh and quality products",
    img: image4,
  },
];

export const images = [
  {
    image: real3,
    link: "/pizza",
  },
  {
    image: real1,
    link: "/sushi",
  },
  {
    image: real4,
    link: "/soups",
  },
  {
    image: real2,
    link: "/drinks",
  },
  {
    image: real5,
    link: "/salads",
  },
];

export const display = {
  base: "block",
  sm: "block",
  md: "block",

  lg: "none",
  xl: "none",
};
export const email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

export const imagesSlice = [
  {
    image: real1,
    title: "Special offer",
    span: "For a big company  as a gift!",
    description:
      "Every seventh pizza as a gift Every seventh pizza as a gift!!",
    link: "/pizza",
  },
  {
    image: real2,
    title: "mix sushi",
    span: "mix sushi rolls mint leaves isolated",
    description: "lime slice and mint leaves isolated & mix sushi rolls ",
    link: "/sushe",
  },
  {
    image: real3,
    title: "soup set mushroom",
    span: "soup with spices & mint leaves isolated",
    description: "lime slice and mint leaves isolated and soup with spices",
    link: "/pizza",
  },
  {
    image: real4,
    title: "New in Dadim",
    span: "“Caesar” salad with trout and heart",
    description: "Food for the mind and heart salad with trout",
    link: "/salads",
  },
  {
    image: real5,
    title: "lemonade drink",
    span: "lime slice and mint leaves isolated",
    description: "lime slice and mint leaves isolated lime slice",
    link: "/salads",
  },
  {
    image: real4,
    title: "lemonade drink ",
    span: "lime slice mint leaves isolated",
    description: "lime slice and mint leaves isolated lime slice",
    link: "/salads",
  },
  // Add more objects for other images
];

export const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Client Facing",
    icon: null,
  },
  {
    text: "Products",
    icon: <ShoppingCartOutlined />,
  },
  {
    text: "Customers",
    icon: <Groups2Outlined />,
  },
  {
    text: "Transactions",
    icon: <ReceiptLongOutlined />,
  },
  {
    text: "Geography",
    icon: <PublicOutlined />,
  },
  {
    text: "Sales",
    icon: null,
  },
  {
    text: "Overview",
    icon: <PointOfSaleOutlined />,
  },
  {
    text: "Daily",
    icon: <TodayOutlined />,
  },
  {
    text: "Monthly",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "Breakdown",
    icon: <PieChartOutlined />,
  },
  {
    text: "Overview",
    icon: <PointOfSaleOutlined />,
  },
  {
    text: "Daily",
    icon: <TodayOutlined />,
  },
];

export const tokensDark = {
  grey: {
    0: "#ffffff",
    10: "#f6f6f6",
    50: "#f0f0f0",
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
    1000: "#000000", // manually adjusted
  },
  primary: {
    // blue
    100: "#d3d4de",
    200: "#a6a9be",
    300: "#7a7f9d",
    400: "#4d547d",
    500: "#21295c",
    600: "#191F45", // manually adjusted
    700: "#141937",
    800: "#0d1025",
    900: "#070812",
  },
  secondary: {
    // yellow
    50: "#f0f0f0", // manually adjusted
    100: "#fff6e0",
    200: "#ffedc2",
    300: "#ffe3a3",
    400: "#ffda85",
    500: "#ffd166",
    600: "#cca752",
    700: "#997d3d",
    800: "#665429",
    900: "#332a14",
  },
};

// function that reverses the color palette
function reverseTokens(tokensDark:any) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode:any) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[400],
              light: tokensDark.primary[400],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[300],
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.primary[600],
              alt: tokensDark.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensLight.primary,
              main: tokensDark.grey[50],
              light: tokensDark.grey[100],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[600],
              light: tokensDark.secondary[700],
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.grey[0],
              alt: tokensDark.grey[50],
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
