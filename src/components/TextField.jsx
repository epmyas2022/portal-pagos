import { ErrorMessage } from "@hookform/error-message";
import EyeIcon from "./Icons/EyeIcon";
import { useState } from "react";

function renderError(message, springs) {
  return (
    <div
      className="text-red-500 absolute text-sm 
     bottom-0 -mb-6"
    >
      {message}
    </div>
  );
}
export default function TextField({
  label,
  name,
  type,
  register = {},
  error = {},
  value = "",
  onChange,
}) {
  const isPassword = type === "password";

  const [showIcon, setShowIcon] = useState(false);

  const showPassword = (name) => {
    const input = document.getElementById(name);
    input.type = !showIcon ? "text" : "password";
    setShowIcon(!showIcon);
  };
  return (
    <div className="flex flex-col relative mb-6">
      <label htmlFor={name}>{label}</label>

      <div
        className={`
        ${
          error[name] ?? false
            ? "focus-within:border-red-500 border-red-500 focus-within:border-2"
            : "focus-within:border-amber-500 border-gray-300"
        }
        border-2 focus-within:border-2 mt-1 relative rounded-full bg-white`}
      >
        <input
          style={{ width: isPassword ? "93%" : "100%" }}
          {...register}
          className={`ring-0 focus:ring-0 outline-none border-none rounded-full`}
          type={type}
          id={name}
          onChange={onChange}
          name={name}
          defaultValue={value || ""}
          required
          placeholder={label}
          autoComplete="off"
        />

        {isPassword ? (
          <div className=" mx-2 absolute right-0 top-[50%] translate-y-[-50%] ">
            <button
              onClick={(e) => {
                e.preventDefault();
                showPassword(name);
              }}
            >
              <EyeIcon show={!showIcon} />
            </button>
          </div>
        ) : null}
      </div>

      <ErrorMessage
        errors={error}
        name={name}
        render={({ message }) => renderError(message)}
      />
    </div>
  );
}
