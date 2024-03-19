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

export function capitalizeFirstLetter(string: any) {
  return string.charAt(0).toUpperCase() + string.slice(1);
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