import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

function RootLayout() {
  return (
    <div>
      <Navbar />
      <div className="text-center">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default RootLayout;
