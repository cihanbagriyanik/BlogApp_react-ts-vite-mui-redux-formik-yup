import { Outlet } from "react-router-dom";
import MyCard from "../components/blog/MyCard";

const Dashboard = () => {
  return (
    <div>
      <MyCard />

      <Outlet />
    </div>
  );
};

export default Dashboard;
