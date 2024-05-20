import Messages from "../lib/messages";
import PocketBaseInstance from "../lib/pocketbase";
import { toast } from "react-toastify";
import router from "../routes/router";
export default function useRegister() {
  const { handleMessages } = Messages();
  const pocketbase = PocketBaseInstance();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target.form);

    const user = {
      username: formdata.get("email").split("@")[0],
      email: formdata.get("email"),
      password: formdata.get("password"),
      passwordConfirm: formdata.get("password"),
      name: formdata.get("name"),
      emailVisibility: true,
      number_phone: formdata.get("phone"),
    };

    try {
      await pocketbase.collection("users").create(user);
      toast.success("Usuario creado correctamente");
      await void e.target.form.reset();
      router.navigate("/login");
    } catch (error) {
  
      const messages = handleMessages(error?.response?.data);
      toast.error(`Error al crear el usuario: ${messages}`);
    }
  };

  return { handleSubmit };
}
