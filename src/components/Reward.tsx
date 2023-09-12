import { Outlet } from "react-router-dom";

import Header from "./Header"

function RewardLayout() {
  return (
    <div className="flex flex-col w-full">
      <Header title={"Reward"} subtitle={"EIZENの報酬を確認します"} />
      <Outlet />
    </div>
  );
}

export default RewardLayout;
