import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

function AppLayout() {
  return (
    <div className="w-full h-screen home flex flex-col px-3">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
