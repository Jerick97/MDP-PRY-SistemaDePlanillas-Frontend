import { ViewUser } from "./ViewUser";
import { EmployeList } from "../../components/data/EmployedList";
import { useState } from "react";
import Pagination from "../../components/Pagination/Pagination";

function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  const totalRecords = EmployeList.length;
  const totalPages = Math.ceil(totalRecords / recordsPerPage);

  const currentRecords = EmployeList.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="container-fluid border rounded bg-white">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Código</th>
                <th>Empleado</th>
                <th>Documento</th>
                <th>Sueldo</th>
                <th>Planilla</th>
                <th>Estado</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {currentRecords.map((registro, index) => (
                <tr key={index}>
                  <td>{registro.codigo}</td>
                  <td>{registro.empleado}</td>
                  <td>{registro.documento}</td>
                  <td>{registro.sueldo}</td>
                  <td>
                    <input type="checkbox" defaultChecked={registro.planilla} />
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        registro.estado === "Activo"
                          ? "bg-success"
                          : "bg-warning"
                      }`}
                    >
                      {registro.estado}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-warning btn-sm m-1">
                      <i className="fas fa-pencil-alt"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-info btn-sm m-1"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <i className="fas fa-search"></i>
                    </button>
                    <div className="modal fade" id="exampleModal" tabIndex="-1">
                      <div
                        className="modal-dialog"
                        style={{ maxWidth: "980px" }}
                      >
                        <div
                          className="modal-content"
                          style={{ backgroundColor: "#F1F1F1" }}
                        >
                          <ViewUser />
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center py-2">
        <span className="label-pagination">
          Mostrando {recordsPerPage} registros de {totalRecords}
        </span>
        <div className="d-block">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
