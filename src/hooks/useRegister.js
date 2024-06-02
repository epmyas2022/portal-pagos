import Messages from "../lib/messages";
import PocketBaseInstance from "../lib/pocketbase";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


export default function useRegister() {
  const { handleMessages } = Messages();
  const pocketbase = PocketBaseInstance();

  const {
    register,
    handleSubmit,
    formState: { errors},
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

    name: {
      register: register("name", {
        required: "El nombre es requerido",
        minLength: {
          value: 5,
          message: "El nombre debe tener al menos 5 caracteres",
        },

      }),
    },

    phone: {
      register: register("phone", {
        required: "El numero de telefono es requerido",
        pattern: {
          value: /^[0-9]{4}-[0-9]{4}$/,
          message: "El numero de telefono no es valido",
        },
      }),
    },
  };


  const sendData = async (data) => {

    const user = {
      username: data.email.split("@")[0],
      email: data.email,
      password: data.password,
      passwordConfirm: data.password,
      name: data.name,
      emailVisibility: true,
      number_phone: data.phone,
    };

    try {
      await pocketbase.collection("users").create(user);
      toast.success("Usuario creado correctamente");
      reset();
      navigate("/login");

    } catch (error) {
      const messages = handleMessages(error?.response?.data);
      toast.error(`Error al crear el usuario: ${messages}`);
    } 
  };

  return { sendData, handleSubmit, validates, errors};
}
