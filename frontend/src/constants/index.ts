import { real4 } from "../assets";

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

export const images = [
  {
    image: real4,
    link: "/pizza",
  },
  {
    image: real4,
    link: "/sushi",
  },
  {
    image: real4,
    link: "/soups",
  },
  {
    image: real4,
    link: "/drinks",
  },
  {
    image: real4,
    link: "/salads",
  },
];
