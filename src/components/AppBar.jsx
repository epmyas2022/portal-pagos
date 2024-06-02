import React, { useState, useEffect } from "react";
import Auth from "../helpers/auth";
import AvatarIcon from "./Icons/AvatarIcon";
import { RenderIf } from "./helpers/Utils";

export default function AppBar() {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    Auth.authentication().then(({ status, user }) => {
      setIsLogged(status);
      setUser(status ? user : {});
    });
  }, []);

  return (
    <div className="flex justify-between items-center p-4 bg-white">
      <h1 className="font-bold tracking-widest">Consulta Pagos</h1>
      <nav className="mr-4">
        <RenderIf condition={!isLogged}>
          <ul className="flex gap-3 items-center">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
            <li>
              <a
                className="font-bold bg-amber-500 ring-4 ring-amber-500 ring-opacity-50
                 px-4 py-2 text-white block rounded-full"
                href="/login"
              >
                Login
              </a>
            </li>
          </ul>
        </RenderIf>

        <RenderIf condition={isLogged}>
          <ul className="flex gap-4 items-center justify-end">
            <a onClick={Auth.logout} href="/login" className="text-amber-500 text-sm font-bold ">
              Logout
            </a>
            <div className="flex gap-2">
              <div className="text-center">
                <h1 className="font-bold tracking-widest text-sm">
                  {user.name}
                </h1>
                <p className="text-gray-500 text-xs">{user.email}</p>
              </div>

              <AvatarIcon width={30} height={30} />
            </div>
          </ul>
        </RenderIf>
      </nav>
    </div>
  );
}
