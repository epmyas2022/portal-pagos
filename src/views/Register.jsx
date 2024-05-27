import useRegister from "../hooks/useRegister";
import TextField from "../components/TextField";
export default function Register() {
  const { handleSubmit, validates, sendData, errors } = useRegister();
  return (
    <div className="flex justify-center bg-gradient-to-r from-slate-100 via-slate-200 to-slate-200 h-full">
      <div className=" bg-slate-50 xl:w-7/12 w-full flex flex-col sm:flex-row m-6 sm:gap-10 items-center rounded-lg border border-slate-300">
        <div className="sm:w-[50%] w-full bg-customYellowOpacity h-full flex items-center justify-center">
          <img className="object-cover" src="./food.png" alt="profile" />
        </div>
        <div className="w-full sm:w-[50%] p-4 ">
          <br />
          <h1 className="text-3xl font-bold">Registrate</h1>
          <br />
          <form
            onSubmit={handleSubmit(sendData, (error) => console.log(error))}
            className="flex flex-col p-2"
          >
            <TextField
              label="Nombre completo"
              name="name"
              type="text"
              register={validates?.name?.register}
              error={errors}
            />

            <TextField
              label="Correo electronico"
              name="email"
              type="email"
              register={validates?.email?.register}
              error={errors}
            />

            <TextField
              label="Contraseña"
              name="password"
              type="password"
              register={validates?.password?.register}
              error={errors}
            />

            <TextField
              label="Telefono"
              name="phone"
              type="text"
              register={validates?.phone?.register}
              error={errors}
            />

            <br />
            <input
              className="rounded-full bg-amber-500 ring-4 ring-amber-500 ring-opacity-50 text-white font-bold p-3"
              type="submit"
              value="Registrarse"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
