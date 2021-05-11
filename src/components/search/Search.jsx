import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setSearchValue } from "../../store/slices/product";

import styles from "./Search.module.scss";

export const Search = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((state) => state.products);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={onSubmit} className={styles.flexContainer}>
        <input
          type="text"
          className={styles.search}
          value={searchValue}
          onChange={(e) => dispatch(setSearchValue(e.target.value))}
        />
        <button type="submit" className={styles.button}>Найти</button>
      </form>
    </div>
  );
};
