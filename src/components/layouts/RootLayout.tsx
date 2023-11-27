import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

function RootLayout() {
  return (
    <div className="flex min-w-screen min-h-screen">
      <Sidebar />
      <div className="flex flex-col w-full min-h-screen z-0">
        <Outlet />
        <div className="grow" />
        <Footer />
      </div>
    </div>
  );
}

export default RootLayout;
