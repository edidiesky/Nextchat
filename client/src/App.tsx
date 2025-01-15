import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import React from "react";

const Home = React.lazy(() => import("./screens/Home"));
import { ProtectRoute } from "./utils/ProtectRoute";
import WorkspaceLayout from "./screens/workspace/Layout";
import MainLayout from "./screens/layout";
import { Channel } from "./screens/workspace";
export default function App() {
  // const [height, setHeight] = useState(0);

  return (
    <div>
      <Routes>
        <Route path={"/"} element={<MainLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<></>}>
                <Home />
              </Suspense>
            }
          />
        </Route>
        {/* workspace layout */}
        <Route path={"/workspace/:workspaceId/:workspaceUserId"} element={<WorkspaceLayout />}>
          <Route
            path='/channel/:id'
            element={
              <Suspense fallback={<></>}>
                <ProtectRoute>
                  <Channel />
                </ProtectRoute>
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}
