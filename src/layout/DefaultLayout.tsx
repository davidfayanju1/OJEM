import Footer from "@/components/common/Footer";
import Nav from "@/components/common/Nav";
import React from "react";

interface LayoutProp {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: LayoutProp) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
