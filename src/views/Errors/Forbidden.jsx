import NotFound from "../../components/Icons/NotFound";

export default function Forbidden({
  message = "No tienes permiso para acceder a esta página",
}) {
  return (
    <div className="flex justify-center items-center p-10 bg-gradient-to-b from-amber-50 from-0% via-transparent">
      <div className="text-center">
        <h1 className="font-bold text-2xl">No autorizado</h1>
        <br />
        <p>{message}</p>
        <a href="/login" className="text-center text-amber-500">
          Go back to home
        </a>

        <div className="mt-5 flex justify-center items-center">
          <NotFound width={400} height={400} />
        </div>
      </div>
    </div>
  );
}
