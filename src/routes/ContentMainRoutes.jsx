import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import CreateEmployed from "../pages/createEmployed/CreateEmployed";

function ContentMainRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/create_employed" element={<CreateEmployed/>} />
    </Routes>
  );
}

export default ContentMainRoutes;
