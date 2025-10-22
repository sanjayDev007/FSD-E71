import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Layout() {
  return (
      <div className="min-h-screen bg-linear-to-b from-white via-gray-50 to-gray-100 text-gray-900">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
  );
}

export default Layout;
