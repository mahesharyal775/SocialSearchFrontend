import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/layout/userLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
