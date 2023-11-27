import { Outlet } from "react-router-dom";

import Header from "../Header";

function RewardsLayout() {
  return (
    <div className="m-4">
      <Header title={"Rewards"} subtitle={"報酬履歴を表示します"} />
      <Outlet />
    </div>
  );
}

export default RewardsLayout;
