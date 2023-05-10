// import { useLocation } from "react-router-dom";
import "./App.css";
import SideBar from "./Components/SideBar";
import AllRoutes from "./Pages/AllRoutes";

function App() {
  // const location = useLocation();
  // const currentRoute = location.pathname;

  return (
    <div className="App">
      <h1 className="z-50 w-screen fixed shadow-md shadow-slate-700 top-0 text-xl text-blue-500 bg-slate-900 font-bold p-4 sm:w-screen">
        Dashboard
      </h1>
      <div className="flex w-full ">
        <div className="sticky top-0 h-screen ">
          <SideBar />
        </div>
        <div className="w-full flex justify-center align-center bg-slate-400">
          <AllRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
