import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="purchase">My Purchase</Link>
          </li>
          <li>
            <Link to="myProfile">My Profile</Link>
          </li>
          <li>
            <Link to="myOrders">My Order</Link>
          </li>
          <li>
            <Link to="addReview">Add Review</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
