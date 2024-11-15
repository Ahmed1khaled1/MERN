import Post from "./post";
import Header from "./header";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        index
        element={
          <main className="max-w-[700px] mx-auto mt-3">
            <Header />
            <Post />
            <Post />
            <Post />
          </main>
        }
      />
      <Route
        path={"/login"}
        element={
          <main className="max-w-[700px] mx-auto mt-3">
            <Header />
            <div>login Page</div>
          </main>
        }
      />
    </Routes>
  );
}

export default App;
