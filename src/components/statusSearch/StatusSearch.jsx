import React from 'react';
import { useSelector } from 'react-redux';

export const StatusSearch = () => {
  const { statusSearch } = useSelector(state => state.products);

  return (
    <div>{statusSearch}</div>
  )
}