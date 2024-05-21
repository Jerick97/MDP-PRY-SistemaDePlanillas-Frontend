import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { LastActivitiesCard } from "../../components/LastActivitiesCard/LastActivitiesCard";
import Dashboard from "../dashboard/Dashboard";
import { lastActivities } from "../../components/data/lastActivities";
import ButtonPrimaryIcon from "../../components/ButtonPrimaryIcon/ButtonPrimaryIcon";
import { CiFilter, CiExport } from "react-icons/ci";
import SearchInput from "../../components/SearchInput/SearchInput";
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

  const handleClick = () => {
    console.log("Botón clicado!");
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div className="w-full h-25 pb-1 pt-3">
          <h3 className="text-primario">Inicio</h3>
        </div>
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
      <div className="row justify-content-md-center align-items-center bg-transparent py-3">
        <div className="col-md-4 col-12">
          <h3 className="text-primario">Ultimos Registros de Empleados</h3>
        </div>

        <div className="col-md-5 col-6 d-flex justify-content-md-end justify-content-start align-items-center">
          <SearchInput placeholder="Buscar empleado" maxWidth="70%" />
        </div>

        <div className="col-md-3 col-6 d-flex justify-content-between align-content-center">
          <ButtonPrimaryIcon
            onClick={handleClick}
            text="Filtrar"
            icon={<CiFilter size={20} />}
            className="me-2"
          />
          <ButtonPrimaryIcon
            onClick={handleClick}
            text="Exportar"
            icon={<CiExport size={20} />}
          />
        </div>
      </div>
      <Dashboard />
    </>
  );
}

export default Home;
