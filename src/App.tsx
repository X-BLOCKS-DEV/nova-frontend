import { Route, Routes } from "react-router-dom";

import RootLayout from "./components/RootLayout";
import SettingsLayout from "./components/SettingsLayout";

import SettingsIndex from "./pages/settings/index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<SettingsLayout />}>
            <Route index element={<SettingsIndex />} />
          </Route>

          <Route path="*" element={
            <div>
              <h1>This URL is invalid</h1>
              <a href="/" className="text-red underline">Back to Top</a>
            </div>
            } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
