import { Suspense, lazy } from "react";

const ModuleAppB = lazy(() => import("moduleAppB/App"));
const ModuleAppC = lazy(() => import("moduleAppC/App"));

function App() {
  return (
    <div style={{ backgroundColor: "blue", padding: "20px" }}>
      <h1>Module App A</h1>
      <h2>Moudle App A Loaded</h2>
    </div>
  );
}

export default App;
