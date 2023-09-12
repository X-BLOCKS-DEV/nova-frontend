import { Outlet } from "react-router-dom";

import Header from "./Header"

function DashboardLayout() {
  return (
    <div className="flex flex-col w-full">
      <Header title={"Dashboard"} subtitle={"EIZENの稼働状況を確認します"} />
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
