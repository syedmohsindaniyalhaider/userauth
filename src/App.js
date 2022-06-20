import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Layout/Main/Main";
// import UserContextProvider from "./Context/CourseProvider";
function App() {
  return (
    <>
      <div className="bg">
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
