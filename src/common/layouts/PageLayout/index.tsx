import { Button, IconButton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";
import Footer from "../Footer";
import Navbar from "../Navbar";

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const [isHide, setIsHide] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsHide(window.scrollY < 200);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div>
      <Navbar />
      {children}
      <Footer />
      <IconButton
        colorScheme="green"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo(0, 0)}
        position="fixed"
        bottom={isHide ? "-100px" : "20px"}
        transition="all 0.2s"
        right="20px"
      >
        <HiArrowUp />
      </IconButton>
    </div>
  );
};

export default PageLayout;
