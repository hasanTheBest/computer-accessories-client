import axios from "axios";
import React, { useRef } from "react";
import { useQuery } from "react-query";
import { Portal } from "react-portal";
import ProductRow from "./AddProduct/ProductRow";
import Loading from "../../../Components/Loading";
import Error from "../../../Components/Error";

const ManageProducts = () => {
  // User
  const confirmRef = useRef("");

  const {
    isError,
    isLoading,
    refetch,
    error: queryErr,
    data: queryData,
  } = useQuery("accessoriesHome", () => axios.get("accessories"));

  // React query state
  if (isError) {
    return <Error msg={queryErr.message} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <section>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Info</th>
                <th>Actions</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {queryData.data.map((item) => (
                <ProductRow
                  key={item._id}
                  {...item}
                  refetch={refetch}
                  ref={confirmRef}
                />
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Portal>
        <input
          type="checkbox"
          id="remove-product-confirm-modal"
          className="modal-toggle"
        />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Are you sure!</h3>
            <p className="py-4">
              you want to remove the item from your product collection. We can
              add to the collection by adding product again through add product
              route. Thank you!
            </p>
            <div className="modal-action">
              <label htmlFor="remove-product-confirm-modal" className="btn">
                Cancel
              </label>
              <label
                htmlFor="remove-product-confirm-modal"
                className="btn btn-error"
                ref={confirmRef}
              >
                Delete
              </label>
            </div>
          </div>
        </div>
      </Portal>
    </>
  );
};

export default ManageProducts;
