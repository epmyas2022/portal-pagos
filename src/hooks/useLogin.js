import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Auth from "../helpers/auth";
export default function useLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const validates = {
    email: {
      register: register("email", {
        required: "El email es requerido",
        pattern: {
          value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          message: "El email no es valido",
        },
      }),
    },

    password: {
      register: register("password", {
        required: "La contraseña es requerida",
        minLength: {
          value: 10,
          message: "Agregar al menos 10 caracteres",
        },
      }),
    },
  };

  const loginWithCredentials = async (data) => {
    const { status, error } = await Auth.login({
      identity: data.email,
      password: data.password,
    });

    if (!status) {
      toast.error(error);
      return;
    }

    toast.success("Bienvenido al sistema");
    reset();
    navigate("/");
  };

  return { validates, loginWithCredentials, handleSubmit, errors };
}
