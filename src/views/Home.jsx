import AppBar from "../components/AppBar";

import DataTable from "react-data-table-component";
function Home() {
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
      selector: (row) => row.pago,
      cell: (row) => (
        <div className="flex justify-center px-4 items-center text-white bg-green-500 p-2 rounded-full">
          {row.pago}
        </div>
      ),
    },
    {
      name: "Acciones",
      cell: (row) => (
        <button className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-pencil-square"
            viewBox="0 0 16 16"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
            />
          </svg>
        </button>
      ),
    },
  ];

  const data = [
    { nombre: "Juan Perez", salon: "A", pago: "Si" },
    { nombre: "Maria Lopez", salon: "B", pago: "No" },
    { nombre: "Pedro Ramirez", salon: "C", pago: "Si" },
    { nombre: "Ana Garcia", salon: "D", pago: "Si" },
    { nombre: "Jose Rodriguez", salon: "E", pago: "No" },
    { nombre: "Luisa Martinez", salon: "F", pago: "Si" },
    { nombre: "Carlos Hernandez", salon: "G", pago: "No" },
    { nombre: "Sofia Jimenez", salon: "H", pago: "Si" },
    { nombre: "Fernando Perez", salon: "I", pago: "Si" },
    { nombre: "Marta Lopez", salon: "J", pago: "No" },
    { nombre: "Ricardo Ramirez", salon: "K", pago: "Si" },
    { nombre: "Laura Garcia", salon: "L", pago: "Si" },
    { nombre: "Javier Rodriguez", salon: "M", pago: "No" },
    { nombre: "Lorena Martinez", salon: "N", pago: "Si" },
    { nombre: "Carmen Hernandez", salon: "O", pago: "No" },
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
  };

  return (
    <div>
      <AppBar />

      <div className="flex flex-col justify-center items-center p-10 bg-gradient-to-b from-amber-50 from-0% via-transparent">
        <div className="w-4/5">
          <div className="flex justify-between items-center flex-wrap">
            <h1 className="font-bold text-xl">Estudiantes</h1>
            <button className="rounded-full bg-amber-500 ring-4 text-sm ring-amber-500 ring-opacity-50 text-white font-bold p-2">
              Agregar
            </button>
          </div>
          <br />

          <div className="rounded-lg bg-white  shadow-lg">
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
