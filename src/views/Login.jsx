import TextField from "../components/TextField";
import useLogin from "../hooks/useLogin";
import AppBar from "../components/AppBar";
export default function Login() {
  const { handleSubmit, validates, errors, loginWithCredentials } = useLogin();

  return (
    <div>
      <AppBar />
      <div className="flex justify-center items-center p-10 bg-gradient-to-b from-amber-50 from-0% via-transparent">
        <div className="w-72">
          <h1 className="font-bold text-2xl text-center">Login</h1>
          <br />
          <form
            className="flex flex-col"
            onSubmit={handleSubmit(loginWithCredentials)}
          >
            <TextField
              register={validates?.email?.register}
              error={errors}
              label="Correo electrónico"
              name="email"
              type="email"
            />
            <TextField
              register={validates?.password?.register}
              error={errors}
              label="Contraseña"
              name="password"
              type="password"
            />
            <br />
            <button
              type="submit"
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
    </div>
  );
}
