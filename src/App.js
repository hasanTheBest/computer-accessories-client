import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import RequireAuth from "./Components/RequireAuth";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Protected/Dashboard";
import MyOrders from "./pages/Protected/MyOrders";
import AddReview from "./pages/Protected/AddReview";
import Purchase from "./pages/Protected/Purchase";
import MyProfile from "./pages/Protected/MyProfile";
import AddProduct from "./pages/Protected/Admin/AddProduct";
import ManageOrders from "./pages/Protected/Admin/ManageOrders";
import ManageProducts from "./pages/Protected/Admin/ManageProducts";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route index element={<MyProfile />} />
            <Route path="purchase/:id" element={<Purchase />} />
            <Route path="myOrders" element={<MyOrders />} />
            <Route path="addReview" element={<AddReview />} />
            <Route path="myProfile" element={<MyProfile />} />

            {/* Admin */}
            <Route path="addProduct" element={<AddProduct />} />
            <Route path="manageOrders" element={<ManageOrders />} />
            <Route path="manageProducts" element={<ManageProducts />} />
          </Route>
          <Route path="blog" element={<Blog />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Toaster />
      <Footer />
    </>
  );
}

export default App;
