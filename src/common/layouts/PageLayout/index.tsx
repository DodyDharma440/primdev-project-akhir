import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
