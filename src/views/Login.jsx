import TextField from "../components/TextField";

export default function Login() {
  return (
    <div className="flex justify-center items-center p-10 bg-gradient-to-b from-amber-50 from-0% via-transparent">
      <div className="w-72">
        <h1 className="font-bold text-2xl text-center">Login</h1>
        <br />
        <form className="flex flex-col">
          <TextField label="Carnet empleado" name="carnet" type="text" />
          <TextField label="Contraseña" name="password" type="password" />

          <button
            type="button"
            className="rounded-full bg-amber-500 ring-4 ring-amber-500 ring-opacity-50 text-white font-bold p-3"
          >
            Ingresar
          </button>
          <br />
          <a href="/register" className="text-center text-amber-500">
            ¿Aun no tienes cuenta?
            <span className="underline"> Registrate</span>
          </a>
        </form>
      </div>
    </div>
  );
}
