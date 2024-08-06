import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./home";
import { Create } from "./Create/create";
import "../../src/pages/home/custom.css";


type Props = {
  isAccountVisible: boolean;
};

const currentYear = new Date().getFullYear();

const routes = [
  { path: "/Create", Page: Create },
  { path: "/", Page: Home },
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
