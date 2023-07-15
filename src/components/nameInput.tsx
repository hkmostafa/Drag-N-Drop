import { useContext } from "react";
import { StateContext } from "../context";

const Name = () => {
  const {
    state: { name, ...others },
    setState,
  }: any = useContext(StateContext);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ name: e.target.value, ...others });
  };

  return (
    <div
      className="px-4 py-2 bg-darkBlue rounded-lg grid gap-2 "
      id="nameInput"
    >
      <label
        htmlFor="name"
        className="text-xs sm:text-sm font-PoppinsRegular text-white"
      >
        Enter your name
      </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={handleChangeName}
        className="bg-white w-full border-2 px-4  py-1 font-PoppinsRegular text-xs rounded-md outline-lightBlue"
      />
    </div>
  );
};
export default Name;
