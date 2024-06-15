import { useCurrentUserQuery } from "../appstate/auth/auth_service";
import { Navigate } from "react-router-dom";
import { authSelector } from "../appstate/auth/auth_slice";
import { useDispatch, useSelector } from "react-redux";

export const AuthWrapper = ({ children }) => {
  const { isSuccess, isError, isFetching } = useCurrentUserQuery();
  const { user } = useSelector(authSelector);
  const token = JSON.parse(localStorage.getItem("token"));

  if (token !== undefined && token !== null) {
    return children;
  }
  if (!isFetching && isError && !user?.isVerified) {
    return <Navigate to={"/login"} replace />;
  }
  if (Boolean(user)) {
    return <Navigate to={"/login"} replace />;
  }
  return isSuccess === true && children;
};
