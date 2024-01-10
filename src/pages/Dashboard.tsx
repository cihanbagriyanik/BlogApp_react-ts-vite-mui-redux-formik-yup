import { Outlet } from "react-router-dom";
import BlogsCard from "../components/blog/BlogsCard";

const Dashboard = () => {
  return (
    <div>
      <BlogsCard />

      <Outlet />
    </div>
  );
};

export default Dashboard;
