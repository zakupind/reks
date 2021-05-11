import React from "react";
import { useDispatch } from "react-redux";

export const ButtonsQuery = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button type="button">Все</button>
      <button type="button">Смартфоны</button>
      <button type="button">Ноутбуки</button>
    </div>
  );
};
