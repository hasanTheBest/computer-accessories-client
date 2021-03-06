import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import Loading from "../../Components/Loading";
import Error from "../../Components/Error";
import auth from "../../firebase.init";
import axios from "axios";
import { useQuery } from "react-query";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);

  // db user to verify admin
  const {
    isError,
    isLoading,
    error: queryErr,
    data: queryData,
  } = useQuery(["userByEmail", user.email], () =>
    axios.get("user?user=" + user.email)
  );

  // React query state
  if (error || isError) {
    return <Error msg={error?.message || queryErr.message} />;
  }

  if (loading || isLoading) {
    return <Loading />;
  }

  const isAdmin = queryData.data?.role === "admin";

  return (
    <div className="drawer drawer-mobile max-w-screen-xl mx-auto">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        <Outlet context={user} />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="myProfile">My Profile</Link>
          </li>

          {isAdmin ? (
            <>
              <li>
                <Link to="addProduct">Add Product</Link>
              </li>
              <li>
                <Link to="manageProducts">Manage Products</Link>
              </li>
              <li>
                <Link to="manageOrders">Manage Orders</Link>
              </li>
              <li>
                <Link to="manageUsers">Manage Users</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="myOrders">My Order</Link>
              </li>
              <li>
                <Link to="addReview">Add Review</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
