import React from 'react';
import { useSelector, useDispatch } from "react-redux";

export const ProductsWrapper = () => {
  const { productsList } = useSelector((state) => state.products);

  return (
    <div>

    </div>
  )
}