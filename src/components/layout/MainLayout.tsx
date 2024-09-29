import { Outlet } from "react-router-dom";
import NavBar from "../../pages/Shared/NavBar/NavBar";
import Footer from "../../pages/Shared/Footer/Footer";
import { FC } from "react";

const MainLayout: FC = () => {
  return (
    <div className="my-5">
      <NavBar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
