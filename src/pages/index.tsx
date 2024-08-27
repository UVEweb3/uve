import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./home";
import { Create } from "./Create/create";
import "../../src/pages/home/custom.css";
import path from "path";
import { homedir } from "os";
import {HomeChannel} from "./HomeChannel";
import {HomeEvent} from "./HomeEvent";
import { CreateUser } from "./CreateUser";
import {HomeUsers} from "./HomeUsers/homeusers";
import { Import } from "lucide-react";
import {HomeEventUsers} from "./HomeEventUsers";



type Props = {
  isAccountVisible: boolean;
};

const currentYear = new Date().getFullYear();

const routes = [
  { path: "/Create", Page: Create },
  { path: "/", Page: Home },
  { path: "/HomeChannel", Page: HomeChannel },
  { path: "/HomeEvent", Page: HomeEvent },
  { path: "/CreateUser", Page: CreateUser },
  {path:"/HomeUsers", Page: HomeUsers},
  {path:"/HomeEventUsers", Page: HomeEventUsers},
];
 
function Routing() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      {routes.map(({ path, Page }) => (
        <Route key={path} path={path} element={<Page />} />
      ))}
    </Routes>
    



  );
}

export { Routing };
