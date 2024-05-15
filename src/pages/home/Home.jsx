import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { LastActivitiesCard } from "../../components/LastActivitiesCard/LastActivitiesCard";
import Dashboard from "../dashboard/Dashboard";
import { lastActivities } from "../../components/data/lastActivities";

function Home() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    setActivities(lastActivities.data);
  }, []);

  const handleAddActivity = () => {
    const activitiesNames = [
      "Empleado Agregado",
      "Empleado Eliminado",
      "Empleado Actualizado",
      "Usuario Eliminado",
    ];

    const randomName =
      activitiesNames[Math.floor(Math.random() * activitiesNames.length)];

    const newActivity = {
      id: new Date().getTime(),
      name: randomName,
      hour: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      typeUser: "usuario",
    };

    setActivities([newActivity, ...activities]);
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div className="d-flex justify-content-between  align-items-center rounded my-2">
          <Card
            typeEmployee="empleados"
            totalEmployees={100}
            nameCompany="MDP"
          />
          <Card typeEmployee="usuarios" totalEmployees={5} nameCompany="MDP" />
          <LastActivitiesCard
            activities={activities}
            handleAddActivity={handleAddActivity}
          />
        </div>
      </div>
      <Dashboard />
    </>
  );
}

export default Home;
