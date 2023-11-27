import { Outlet } from "react-router-dom";

import Header from "../Header"

function SettingsLayout() {
  return (
    <div className="m-4">
      <Header title={"Settings"} subtitle={"各種設定を確認します"} />
      <div className="m-4 border border-solid rounded-2xl">
        <Outlet />
      </div>
    </div>
  );
}

export default SettingsLayout;
