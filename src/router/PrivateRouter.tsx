import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { currentUser } = useSelector((state:any) => state.auth);

  return currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
