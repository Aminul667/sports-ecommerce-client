import { Outlet } from "react-router-dom";
import NavBar from "../../pages/Shared/NavBar/NavBar";
// import Footer from "../../pages/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="m-5 p-5 bg-colorContainer rounded-md">
      <NavBar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
