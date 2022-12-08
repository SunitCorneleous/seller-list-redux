import { list } from "postcss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSellers } from "../store/sellersSlice";

const Sellers = () => {
  const { sellers, isLoading, error } = useSelector(state => state.sellers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSellers());
  }, []);

  //   console.log(Object.keys(sellers[1]?.slotDetails?.availability));

  return (
    <div className="max-w-[1420px] mx-auto p-5">
      <h1 className="text-4xl text-center">Total Seller: {sellers.length}</h1>
      {sellers.map(seller => (
        <div
          key={seller._id}
          className="card lg:card-side bg-base-200 my-5 shadow-xl lg:w-4/6 lg:mx-auto lg:h-[300px]"
        >
          <figure>
            <img
              src={seller.profileImg}
              alt="Album"
              className="lg:w-[350px] lg:object-fill lg:h-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name: {seller.name}</h2>
            <p className="text-xl">Gender: {seller.gender}</p>
            <p className="text-xl">City: {seller.city}</p>
            <p className="text-xl ">
              Status:{" "}
              <span className="text-green-600 font-semibold">
                {seller.mentorStatus}
              </span>
            </p>
            <p className="lg:text-xl">
              Availability:{" "}
              {Object.keys(seller?.slotDetails?.availability).map(
                (day, index) => (
                  <span
                    key={index}
                    className="badge badge-sm lg:badge-lg mx-[2px] lg:mx-1"
                  >
                    {day}
                  </span>
                )
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sellers;
