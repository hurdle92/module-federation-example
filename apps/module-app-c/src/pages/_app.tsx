import { Suspense, lazy } from "react";

function App() {
  // @ts-ignore
  const ModuleAppB = lazy(() => import("moduleAppB/App"));

  return (
    <div style={{ backgroundColor: "blue" }}>
      <h1>Module App C</h1>
      <h2>Moudle App C Loaded</h2>
      <div>
        <h2>Module App B</h2>
        <Suspense fallback={<div>loading Module App B</div>}>
          <ModuleAppB />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
