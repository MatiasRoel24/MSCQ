import React from "react";
import { Item } from "../Item/item";

export const ItemList = ({ productos }) => {
  return productos.map((prod) => <Item key={prod.id} productos={prod} />);
};
