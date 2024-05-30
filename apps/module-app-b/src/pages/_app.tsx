import { Suspense, lazy } from "react";

function App() {
  return (
    <div style={{ backgroundColor: "green" }}>
      <h1>Module App B</h1>
      <div>
        <h2>Module App B Loaded</h2>
        <Suspense fallback={<div>loading Micro App B</div>}></Suspense>
      </div>
    </div>
  );
}

export default App;
