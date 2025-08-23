import React from "react";
import Navbar from "./navbar";
import Footer from "./Footer";

function Layout({ children }: { children: React.ReactNode }) {
  return <div>
    <Navbar/>
    {children}
    <Footer/>
    </div>;
}

export default Layout;
