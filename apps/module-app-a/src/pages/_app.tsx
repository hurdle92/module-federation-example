import { Suspense, lazy } from "react";

const ModuleAppB = lazy(() => import("moduleAppB/App"));
const ModuleAppC = lazy(() => import("moduleAppC/App"));

function App() {
  return (
    <div style={{ backgroundColor: "red" }}>
      <h1>Module App A</h1>
      <h2>Moudle App A Loaded</h2>
      <Suspense fallback={<div>is loading</div>}>
        <ModuleAppB />
      </Suspense>
    </div>
  );
}

export default App;
