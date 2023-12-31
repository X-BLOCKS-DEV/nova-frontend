import { Outlet } from "react-router-dom";

import Header from "./Header"

function SettingsLayout() {
  return (
    <div className="flex flex-col w-full">
      <Header title={"Settings"} subtitle={"各種設定を確認します"} />
      <Outlet />
    </div>
  );
}

export default SettingsLayout;
