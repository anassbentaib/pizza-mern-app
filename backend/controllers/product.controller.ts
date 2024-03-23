import Product from "../model/product.modal";
import { errorHandler } from "../utils/error";

export const createProduct = async (req: any, res: any, next: any) => {
  const { type, imageSrc, description, title, price, rating, supply } =
    req.body;
  if (
    !type ||
    !imageSrc ||
    !title ||
    !price ||
    price === null ||
    type === "" ||
    title === "" ||
    imageSrc.length == 0
  ) {
    return errorHandler(403, "Please fill the required fields");
  }
  try {
    await Product.create({
      title,
      type,
      imageSrc,
      description,
      price,
      rating,
      supply,
    });
    return res.json({ message: "success" });
  } catch (error) {
    next(error);
  }
};

export const getProducts = async (req: any, res: any, next: any) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    next(error);
  }
};
