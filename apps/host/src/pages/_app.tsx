import { Suspense, lazy } from "react";

const ModuleAppA = lazy(() => import("moduleAppA/App"));
const ModuleAppB = lazy(() => import("moduleAppB/App"));
const ModuleAppC = lazy(() => import("moduleAppC/App"));

function App() {
  return (
    <div style={{ backgroundColor: "red", padding: "20px" }}>
      <h1>Host App</h1>
      <h2>Host App Loaded</h2>
      <Suspense fallback={<div>is loading</div>}>
        <ModuleAppA />
        <ModuleAppB />
      </Suspense>
    </div>
  );
}

export default App;
