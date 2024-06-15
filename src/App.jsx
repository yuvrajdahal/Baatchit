import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import { AuthWrapper } from "./providers/AuthWrapper";

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthWrapper><Home/></AuthWrapper>,
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path:"/signup",
    element: <Signup/>
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword/>
  }
])

function App() {
  return  <RouterProvider router={router}></RouterProvider>;
}

export default App;