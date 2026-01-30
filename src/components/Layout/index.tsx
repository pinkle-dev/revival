import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { BottomBar } from "./Bar";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <BottomBar />
      <Footer />
    </>
  );
};
