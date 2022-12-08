import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSellers } from "../store/sellersSlice";

const Sellers = () => {
  const { sellers, isLoading, error } = useSelector(state => state.sellers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSellers());
  }, []);

  return <div></div>;
};

export default Sellers;
