import { Outlet } from "react-router-dom";

import Header from "../Header"

function DashboardLayout() {
  return (
    <div className="m-4">
      <Header title={"Dashboard"} subtitle={"ノードの稼働情報を確認します"} />
      <div className="m-4 border border-solid rounded-2xl">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
