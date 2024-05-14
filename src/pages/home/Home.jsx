import Card from "../../components/Card/Card";
import Dashboard from "../dashboard/Dashboard";

function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="d-flex justify-content-start align-items-center rounded my-2">
          <Card
            typeEmployee="empleados"
            totalEmployees={100}
            nameCompany="MDP"
          />
          <Card typeEmployee="usuarios" totalEmployees={20} nameCompany="MDP" />
        </div>
      </div>
      <Dashboard />
    </>
  );
}

export default Home;
