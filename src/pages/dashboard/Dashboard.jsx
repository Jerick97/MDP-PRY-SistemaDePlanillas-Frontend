import { ViewUser } from "./ViewUser";
import { EmployeList } from "../../components/data/EmployedList";
import { useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import Avatar from "../../assets/icons/typeUser/green-36.png";

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
      <div className="container-fluid border rounded p-0">
        <div className="table-responsive rounded">
          <table className={`table table-dark-mode table-striped table-hover`}>
            <thead className="table-header">
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
            <tbody className="fw-medium">
              {currentRecords.map((registro, index) => (
                <tr key={index}>
                  <td>{registro.codigo}</td>
                  <td>
                    <div className="employee-container">
                      <img
                        src={Avatar}
                        alt="avatar"
                        className="employee-avatar"
                      />
                      <div className="d-flex flex-column align-items-start justify-content-center">
                        <p className="fs-6 fw-bold mb-0">{registro.empleado}</p>
                        <p className="text-small mb-0">{registro.birthday}</p>
                      </div>
                    </div>
                  </td>
                  <td className="d-flex flex-column align-items-start justify-content-center">
                    <p className="fs-6 fw-bold mb-0">{registro.documento}</p>
                    <p className="text-small mb-0">DNI</p>
                  </td>
                  <td>
                    <div className="d-flex flex-column align-items-start justify-content-center">
                      <p className="fs-6 fw-bold mb-0">{registro.sueldo}</p>
                      <p className="text-small mb-0">Paid</p>
                    </div>
                  </td>
                  <td>
                    <input type="checkbox" defaultChecked={registro.planilla} />
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        registro.estado === "Activo"
                          ? "bagge-success"
                          : "bagge-warning"
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
