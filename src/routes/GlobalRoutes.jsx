import { Routes, Route } from "react-router-dom";

import BaseTemplate from "../components/layout/baseTemplate";
import Login from "../pages/auth/Login";

function GlobalRoutes() {
  return (
    <Routes>
      <Route path="/base/*" exact element={<BaseTemplate/>} />
      <Route path="/auth" element={<Login/>} />
    </Routes>
  );
}

export default GlobalRoutes;
