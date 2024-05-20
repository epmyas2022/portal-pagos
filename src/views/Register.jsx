import useRegister from "../hooks/useRegister";
export default function Register() {
 
  const { handleSubmit } = useRegister();
  return (
    <div className="sm:h-dvh flex justify-center bg-gradient-to-r from-slate-100 via-slate-200 to-slate-200">
      <div className=" bg-slate-50 xl:w-7/12 w-full flex flex-col sm:flex-row m-6 sm:gap-10 items-center rounded-lg border border-slate-300">
        <div className="sm:w-[50%] w-full bg-customYellowOpacity h-full flex items-center justify-center">
          <img className="object-cover" src="./food.png" alt="profile" />
        </div>
        <div className="w-full sm:w-[50%] p-4 ">
          <br />
          <h1 className="text-3xl font-bold">Registrate</h1>
          <br />
          <form className="flex flex-col gap-4 p-2">
            <label htmlFor="name">Nombre completo:</label>
            <input
              className="focus:ring-amber-500 focus:border-amber-500 rounded-full"
              type="text"
              id="name"
              name="name"
              required
              placeholder="July Thomson"
            />
            <label htmlFor="email">Correo electronico:</label>
            <input
              className="focus:ring-amber-500 focus:border-amber-500 rounded-full"
              type="email"
              id="email"
              name="email"
              required
              placeholder="email@gmail.com"
            />
            <label htmlFor="password">Contraseña:</label>
            <input
              className="focus:ring-amber-500 focus:border-amber-500 rounded-full"
              type="password"
              id="password"
              name="password"
              required
              placeholder="Pharase of 10 "
            />
            <label htmlFor="phone">Numero de telefono:</label>
            <input
              className="focus:ring-amber-500 focus:border-amber-500 rounded-full"
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="0000-0000"
            />
            <br />
            <button
              className="rounded-full bg-amber-500 ring-4 ring-amber-500 ring-opacity-50 text-white font-bold p-3"
              type="submit"
              onClick={handleSubmit}
            >
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
