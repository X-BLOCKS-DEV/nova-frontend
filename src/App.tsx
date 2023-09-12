import { Route, Routes } from "react-router-dom";

import RootLayout from "./components/RootLayout";
import SettingsLayout from "./components/SettingsLayout";
import DashboardLayout from "./components/DashboardLayout";
import RewardLayout from "./components/Reward";

import SettingsIndex from "./pages/settings/index";
import DashboardIndex from "./pages/dashboard/index";
import RewardIndex from "./pages/reward/index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<div>Home</div>} />
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardIndex />} />
          </Route>
          <Route path="reward-history" element={<RewardLayout />}>
            <Route index element={<RewardIndex />} />
          </Route>
          <Route path="settings" element={<SettingsLayout />}>
            <Route index element={<SettingsIndex />} />
          </Route>

          <Route path="*" element={<div>Nothing path</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
