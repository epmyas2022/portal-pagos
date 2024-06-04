import AppBar from "../components/AppBar";
import useHome from "../hooks/useHome";
import DataTable from "react-data-table-component";
import TextField from "../components/TextField";
import AppModal from "../components/AppModal";
import { Checkbox } from "flowbite-react";

function Home() {
  const {
    data,
    showModal,
    setShowModal,
    validates,
    handleSubmit,
    addStudent,
    updateStudent,
    deleteStudent,
    errors,
    editData,
    handleEdit,
    setEditData,
  } = useHome();

  const columns = [
    {
      name: "Nombre",
      selector: (row) => row.nombre,
    },
    {
      name: "Salon",
      selector: (row) => row.salon,
    },
    {
      name: "Pago",
      selector: (row) => row.is_pagado,
      cell: (row) => (
        <div
          className={`flex justify-center px-4
         items-center text-white ${
           row.is_pagado ? "bg-green-500" : "bg-gray-700"
         } p-2 rounded-full`}
        >
          {row.is_pagado ? "Pagado" : "Pendiente"}
        </div>
      ),
    },
    {
      name: "Acciones",
      cell: (row) => (
        <div className="flex  ml-2 gap-2">
          <button className="text-center" onClick={() => handleEdit(row)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fillRule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
              />
            </svg>
          </button>
          <button className="text-center text-red-500" onClick={() => deleteStudent(row.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash3"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
            </svg>
          </button>
        </div>
      ),
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#FBBF24",
        color: "white",
        fontSize: "1rem",
      },
    },

    rows: {
      style: {
        textAlign: "center",
      },
    },
    cells: {
      style: {
        fontSize: "0.9rem",
      },
    },
  };

  return (
    <div>
      <AppBar />

      <AppModal
        show={showModal}
        title={editData?.id ? "Editar Estudiante" : "Agregar Estudiante"}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <form
          className="p-4"
          onSubmit={handleSubmit(editData?.id ? updateStudent : addStudent)}
        >
          <TextField
            register={validates?.nombre?.register}
            label="Nombre"
            name="nombre"
            type="text"
            value={editData?.nombre}
            error={errors}
          />
          <TextField
            register={validates?.salon?.register}
            label="Salon"
            name="salon"
            value={editData?.salon}
            type="text"
            error={errors}
          />

          <div className="flex gap-2 items-center">
            <p>El estudiante pago</p>
            <Checkbox
              {...validates?.is_pagado?.register}
              className="text-amber-500"
              label="Pago"
              defaultChecked={editData?.is_pagado}
              name="is_pagado"
            />
          </div>

          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="rounded-full bg-amber-500 ring-4 text-sm ring-amber-500 ring-opacity-50 text-white font-bold p-2"
            >
              Aceptar
            </button>
          </div>
        </form>
      </AppModal>
      <div className="flex flex-col justify-center items-center p-10 bg-gradient-to-b from-amber-50 from-0% via-transparent">
        <div className="w-4/5">
          <div className="flex justify-between items-center flex-wrap">
            <h1 className="font-bold text-xl">Estudiantes</h1>
            <button
              onClick={() => {
                setEditData(null);
                setShowModal(true);
              }}
              className="rounded-full bg-amber-500 ring-4 text-sm ring-amber-500 ring-opacity-50 text-white font-bold p-2"
            >
              Agregar
            </button>
          </div>
          <br />

          <div className="rounded-lg bg-white  shadow-lg z-0">
            <DataTable
              columns={columns}
              data={data}
              customStyles={customStyles}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
