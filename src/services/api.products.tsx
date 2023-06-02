import { Product } from "~/types/product";
import products from "./products.json";

export default {
  products: {
    list: (): Promise<Product[]> => Promise.resolve(products)
  }
}
