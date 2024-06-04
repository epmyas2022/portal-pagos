import { RenderIf, Slot } from "./helpers/Utils";

export default function AppModal({
  children,
  show,
  onClose,
  onAccept,
  title = "Example Title",
}) {
  return (
    <RenderIf condition={show}>
      <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black bg-opacity-40 z-10">
        <div className="bg-white w-1/3 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-lg">
              <Slot name="title">{title}</Slot>
            </h1>
            <button onClick={onClose} className=" text-black rounded-full p-2">
              X
            </button>
          </div>
          <div className="mt-4">{children}</div>
        </div>
      </div>
    </RenderIf>
  );
}
