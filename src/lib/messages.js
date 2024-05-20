export default function Messages() {
  const handleMessages = (data) => {


    if(!data) return "Error en el servidor";
    const keys = Object.keys(data);

    const messages = keys.map((key) => `el campo ${key} ${data[key].message}`);

    return messages.join(" y ");
  };

  return { handleMessages };
}
