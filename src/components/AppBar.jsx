export default function AppBar() {
  return (
    <div className="flex justify-between items-center p-4 bg-white">
      <h1 className="font-bold tracking-widest">Consulta Pagos</h1>
      <nav className="mr-4">
        <ul className="flex gap-3 items-center">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
          <li>
            <a className="font-bold bg-amber-500 ring-4 ring-amber-500 ring-opacity-50 px-4 py-2 text-white block rounded-full" href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
