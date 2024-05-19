export default function useMessages() {
  const handleMessages = (data) => {
    const keys = Object.keys(data);

    const messages = keys.map((key) => `el campo ${key} ${data[key].message}`);

    return messages.join(" y ");
  };

  return { handleMessages };
}
